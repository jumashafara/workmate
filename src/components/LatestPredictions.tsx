import React, { useEffect } from "react";

const LatestPredictions: React.FC = () => {
  const [sample_data, updateSampleData] = React.useState<any>([]);

  const getSampleData = async () => {
    const response = await fetch("http://localhost:8000/sample_data");
    const sample_data = await response.json();
    return sample_data;
  };

  // useEffect to get sample data
  useEffect(() => {
    getSampleData().then((sample_data) => {
      updateSampleData(sample_data);
    });
  }, []);
  return (
    <div className="w-full border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4">Latest Predictions</h2>
      </div>

      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">Household ID</th>
            <th className="px-4 py-2 border-b text-left">Cluster</th>
            <th className="px-4 py-2 border-b text-left">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {sample_data.map((household: any) => (
            <tr key={household.hhid}>
              <td className="px-4 py-2 border-b">{household.hhid}</td>
              <td className="px-4 py-2 border-b">{household.cluster}</td>
              <td className="px-4 py-2 border-b">{household.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestPredictions;
