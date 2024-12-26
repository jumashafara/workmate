export const getSampleData = async () => {
  try {
    const response = await fetch("http://localhost:8000/sample_data");
    if (!response.ok) throw new Error("Failed to fetch sample data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sample data:", error);
  }
};
