import React from "react";

interface MetricsProps {
  year: number;
  accuracy: number;
  precisionClass0: number;
  precisionClass1: number;
  recallClass0: number;
  recallClass1: number;
  f1ScoreClass0: number;
  f1ScoreClass1: number;
  ROCAUCScore: number;
}

const year_metrics: MetricsProps = {
  year: 1,
  accuracy: 0.721,
  precisionClass0: 0.733,
  precisionClass1: 0.709,
  recallClass0: 0.728,
  recallClass1: 0.714,
  f1ScoreClass0: 0.73,
  f1ScoreClass1: 0.711,
  ROCAUCScore: 0.81,
};

const ModelStatsTable: React.FC = () => {
  return (
    <div className="border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4">
          Year {year_metrics.year} Model Metrics
        </h2>
      </div>

      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Metric</th>
            <th className="px-4 py-2 border-b">Precision</th>
            <th className="px-4 py-2 border-b">Recall</th>
            <th className="px-4 py-2 border-b">F1 Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Achieved</td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.precisionClass1.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.recallClass1.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.f1ScoreClass1.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Not Achieved</td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.precisionClass0.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.recallClass0.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.f1ScoreClass0.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Accuracy</td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.accuracy.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.accuracy.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              {year_metrics.accuracy.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModelStatsTable;
