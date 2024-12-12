import React from 'react'

const LatestPredictions:React.FC = () => {
    const household_data = [
    { hhid: 'Household 1', cluster: 'Cluster 1', prediction: '0.5' },
    { hhid: 'Household 2', cluster: 'Cluster 2', prediction: '0.5' },
    { hhid: 'Household 3', cluster: 'Cluster 3', prediction: '0.5' },
    // Add more variables as needed
  ];
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
          {household_data.map((household, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2 border-b">{household.hhid}</td>
              <td className="px-4 py-2 border-b">{household.cluster}</td>
              <td className="px-4 py-2 border-b">{household.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LatestPredictions