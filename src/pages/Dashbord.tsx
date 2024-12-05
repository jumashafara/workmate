import React from "react";
import ModelMetricsCard from "../components/ModelMetricsCard";
import FeatureImportanceChart from "../components/FeatureImportanceChart";
import VariableDescriptions from "../components/FeatureDescriptions";

const Dashbord: React.FC = () => {
  const featureNames = [
    "Age",
    "Income",
    "Education",
    "Occupation",
    "Marital Status",
    "Household Size",
  ];
  const importances = [0.25, 0.2, 0.15, 0.1, 0.18, 0.12];

  const variables = [
    {
      name: "Hhh_sex",
      description: "Sex of the household head",
      type: "Categorical",
    },
    {
      name: "Hhh_age",
      description: "Age of the household head",
      type: "Numeric",
    },
    {
      name: "Tot_hhmembers",
      description: "Total number of household members",
      type: "Numeric",
    },
    {
      name: "Material_walls",
      description: "Type of wall material used in the house",
      type: "Categorical",
    },
    {
      name: "Water_distance",
      description: "Distance to main water source in meters",
      type: "Numeric",
    },
  ];

  return (
    <>
      <div className="pb-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div id="model-stats" className="flex-grow">
            <ModelMetricsCard
              accuracy={0.72}
              precisionClass0={0.71}
              precisionClass1={0.71}
              recallClass0={0.71}
              recallClass1={0.71}
              f1ScoreClass0={0.71}
              f1ScoreClass1={0.71}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div id="feature-importance" className="mx-auto w-full">
            <FeatureImportanceChart
              featureNames={featureNames}
              importances={importances}
            />
          </div>
          <div id="feature-importance" className="mx-auto w-full">
            <VariableDescriptions variables={variables} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
