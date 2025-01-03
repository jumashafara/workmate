import React, { useEffect } from "react";

const SelectPassenger: React.FC = () => {
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
    <div className="confusion-matrix border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">
          Select a Household
        </h2>
        <h2>Select from list or enter Household data</h2>
      </div>
      <div className="p-3">
        {/* select options */}
        <select
          name=""
          id=""
          className="border border-orange-600 p-3 w-full rounded"
        >
          <option value="">Select Household</option>
          {sample_data.map((household: any) => (
            <option key={household.hhid} value={household.hhid}>
              {household.hhid}
            </option>
          ))}
        </select>
      </div>
      <div className="p-3">
        <button className="btn bg-orange-600 text-white p-3 w-full rounded">
          Enter Data
        </button>
      </div>
    </div>
  );
};

export default SelectPassenger;
