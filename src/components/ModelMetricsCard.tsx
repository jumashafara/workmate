import React from "react";

interface MetricsProps {
  accuracy: number;
  precisionClass0: number;
  precisionClass1: number;
  recallClass0: number;
  recallClass1: number;
  f1ScoreClass0: number;
  f1ScoreClass1: number;
}

const ModelStatsTable: React.FC<MetricsProps> = ({
  accuracy,
  precisionClass0,
  precisionClass1,
  recallClass0,
  recallClass1,
  f1ScoreClass0,
  f1ScoreClass1,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Model Stats</h2>
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Metric</th>
            <th className="px-4 py-2 border-b">Class 0</th>
            <th className="px-4 py-2 border-b">Class 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Precision</td>
            <td className="px-4 py-2 border-b text-center">{precisionClass0.toFixed(2)}</td>
            <td className="px-4 py-2 border-b text-center">{precisionClass1.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Recall</td>
            <td className="px-4 py-2 border-b text-center">{recallClass0.toFixed(2)}</td>
            <td className="px-4 py-2 border-b text-center">{recallClass1.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">F1 Score</td>
            <td className="px-4 py-2 border-b text-center">{f1ScoreClass0.toFixed(2)}</td>
            <td className="px-4 py-2 border-b text-center">{f1ScoreClass1.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Accuracy</td>
            <td colSpan={2} className="px-4 py-2 border-b text-center">{accuracy.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModelStatsTable;
