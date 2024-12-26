export const getPrediction = async (data: any) => {
  const transformedFeatures = Object.fromEntries(
    Object.entries(data).map(([key, value]) =>
      typeof value === "number" ? [key, [value]] : [key, value]
    )
  );
  try {
    const response = await fetch("http://127.0.0.1:8001/predictor/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformedFeatures),
    });
    if (!response.ok) throw new Error("Failed to fetch prediction");
    const predictionProbabilities = await response.json();
    return predictionProbabilities;
  } catch (error) {
    console.error("Error fetching prediction:", error);
  }
};
