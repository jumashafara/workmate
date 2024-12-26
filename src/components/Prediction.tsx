import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import { getPrediction } from "../api/GetPrediction";

interface PredictionProps {
  sampleData: any[];
}

const Prediction: React.FC<PredictionProps> = ({ sampleData }) => {
  const [prediction, setPrediction] = useState<number>(0.5);
  const [selectedHousehold, setSelectedHousehold] = useState<string | null>(
    null
  );
  const [localFeatures, setLocalFeatures] = useState<any>(null);

  // Load feature data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("featureData");
    if (storedData) {
      setLocalFeatures(JSON.parse(storedData));
    }
  }, [prediction, setPrediction]);

  const handleHouseholdChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const householdId = event.target.value;
    setSelectedHousehold(householdId);
    const householdData = sampleData.find(
      (household) => household.hhid === householdId
    );

    if (householdData) {
      // Use selected household data for prediction
      const predictionResult = await getPrediction(householdData);
      setPrediction(predictionResult.prediction_probability);
      localStorage.setItem("featureData", JSON.stringify(householdData));
    }
  };

  const handleUseLocalFeatures = async () => {
    if (localFeatures) {
      // Use local feature data for prediction
      const predictionResult = await getPrediction(localFeatures);
      setPrediction(predictionResult.prediction_probability);
    } else {
      alert("No local feature data found!");
    }
  };

  return (
    <div className="confusion-matrix border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">Prediction</h2>
        <h2>What are the probabilities of achieving and not achieving?</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2">
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
            <button
              onClick={handleUseLocalFeatures}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-full"
            >
              Use Local Feature Data
            </button>
          </div>
          <div className="p-3">
            {/* Results table */}
            <table className="border border-gray-300 w-full bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border-b text-left">Status</th>
                  <th className="px-4 py-2 border-b text-left">Probability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 border-b text-left">Achieving</td>
                  <td className="px-4 py-2 border-b text-left">
                    {prediction.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-left">
                    Not Achieving
                  </td>
                  <td className="px-4 py-2 border-b text-left">
                    {(1 - prediction).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2">
          <PieChart
            values={[prediction, 1 - prediction]}
            labels={["Achieving", "Not Achieving"]}
            title={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Prediction;
