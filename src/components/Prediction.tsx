import React, { useEffect, useState } from "react";

const Prediction: React.FC = () => {
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [prediction, setPrediction] = useState<number>(0.5);
  const [selectedHousehold, setSelectedHousehold] = useState<string | null>(
    null
  );

  const getSampleData = async () => {
    try {
      const response = await fetch("http://localhost:8000/sample_data");
      if (!response.ok) throw new Error("Failed to fetch sample data");
      const data = await response.json();
      setSampleData(data);
    } catch (error) {
      console.error("Error fetching sample data:", error);
    }
  };

  const getPrediction = async (data: any) => {
    try {
      const response = await fetch("http://127.0.0.1:8001/predictor/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to fetch prediction");
      const predictionProbabilities = await response.json();
      setPrediction(predictionProbabilities.prediction_probability);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  // Fetch sample data on mount
  useEffect(() => {
    getSampleData();
  }, []);

  const handleHouseholdChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const householdId = event.target.value;
    setSelectedHousehold(householdId);
    const householdData = sampleData.find(
      (household) => household.hhid === householdId
    );
    if (householdData) {
      getPrediction(householdData);
    }
  };

  return (
    <div className="confusion-matrix border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">Prediction</h2>
        <h2>What are the probabilities of achieving and not achieving?</h2>
      </div>
      <div className="p-3">
        {/* Dropdown for household selection */}
        <select
          value={selectedHousehold || ""}
          onChange={handleHouseholdChange}
          className="border border-orange-600 p-3 w-full rounded"
        >
          <option value="">Select Household</option>
          {sampleData.map((household: any) => (
            <option key={household.hhid} value={household.hhid}>
              {household.hhid}
            </option>
          ))}
        </select>
      </div>
      <div className="p-3">
        {/* Results table */}
        <table className="border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Achieved</th>
              <th className="px-4 py-2 border-b text-left">Not Achieved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b text-left">{(prediction).toFixed(2)}</td>
              <td className="px-4 py-2 border-b text-left">{(1 - prediction).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prediction;
