import React from "react";

interface VariableDescription {
  name: string;
  description: string;
  type: string;
}

interface VariableDescriptionsProps {
  variables: VariableDescription[];
}

const VariableDescriptions: React.FC<VariableDescriptionsProps> = ({ variables }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Variable Descriptions</h2>
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">Variable Name</th>
            <th className="px-4 py-2 border-b text-left">Description</th>
            <th className="px-4 py-2 border-b text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {variables.map((variable, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2 border-b">{variable.name}</td>
              <td className="px-4 py-2 border-b">{variable.description}</td>
              <td className="px-4 py-2 border-b">{variable.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariableDescriptions;
