import React from "react";

interface VariableDescription {
  name: string;
  description: string;
  type: string;
}

interface VariableDescriptionsProps {
  variables: VariableDescription[];
}

const variables = [
  {
    name: "Agriculture Land (Acres)",
    description: "Size of land used for agriculture",
    type: "Numerical",
  },
  {
    name: "Food Banana",
    description: "If the household planted food banana",
    type: "Categorical",
  },
  {
    name: "Farm Implements Owned",
    description: "Number of farm implements like hoes owned by the household",
    type: "Numerical",
  },
  {
    name: "Total Household Members",
    description: "The number of members in a household",
    type: "Numerical",
  },
  {
    name: "Sweet Potatoes",
    description: "If the household planted sweet potatoes",
    type: "Categorical",
  },
  {
    name: "Ground Nuts",
    description: "If the household planted Ground Nuts",
    type: "Categorical",
  },
  {
    name: "Coffee",
    description: "If the household planted Coffee",
    type: "Categorical",
  },
  {
    name: "Business Participation",
    description: "If any household member participates in a business",
    type: "Categorical",
  },
];

const VariableDescriptions: React.FC<VariableDescriptionsProps> = () => {
  return (
    <div className="w-full border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4">Variable Descriptions</h2>
      </div>

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
