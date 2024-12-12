import React from "react";

const Prediction: React.FC = () => {
  return (
    <div className="confusion-matrix border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">Prediction</h2>
        <h2>What are the probabilities of achieving and not achieving?</h2>
      </div>
      <div className="p-3">
        {/* select options */}
        <select
          name=""
          id=""
          value={"Household 1"}
          className="border border-orange-600 p-3 w-full rounded"
        >
          <option value="">Select Household</option>
          <option value="">Household 1</option>
          <option value="">Household 2</option>
          <option value="">Household 3</option>
        </select>
      </div>
      <div className="p-3">
        {/* results tables */}
        <table className="border border-gray-300 w-full">
          <thead className="p-3 border">
            <tr>
              <th className="px-4 py-2 border-b text-left">Achieved</th>
              <th className="px-4 py-2 border-b text-left">Not Achieved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b text-left">0.5</td>
              <td className="px-4 py-2 border-b text-left">0.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prediction;
