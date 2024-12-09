import React from "react";
import FeatureImportanceChart from "../components/FeatureImportanceChart";
import VariableDescriptions from "../components/FeatureDescriptions";

const FeatureImporances: React.FC = () => {
  return (
    <>
      <div className="pb-5">
        <h1 className="text-2xl font-bold">Feature Importances</h1>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="w-full flex flex-col space-y-5 justify-between">
          <div id="feature-importance w-full">
            <FeatureImportanceChart featureNames={[]} importances={[]} />
          </div>
          <div className="confusion-matrix">
            <VariableDescriptions variables={[]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureImporances;
