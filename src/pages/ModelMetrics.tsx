import React from "react";
import ModelStatsTable from "../components/ModelMetricsCard";
import ConfusionMatrix from "../components/ConfusionMatrix";
import ROCCurve from "../components/ROCAUC";

const ModelMetrics: React.FC = () => {
  return (
    <>
      <div className="pb-5 font-roboto">
        <h1 className="text-2xl font-bold">Model Metrics</h1>
      </div>
      <div className="flex flex-col ">
        <div className="w-full flex flex-col space-y-5">
          <div id="feature-importance w-full">
            <ModelStatsTable />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="confusion-matrix w-1/2">
              <ConfusionMatrix />
            </div>
            <div className="roc-curve w-1/2">
              <ROCCurve />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelMetrics;
