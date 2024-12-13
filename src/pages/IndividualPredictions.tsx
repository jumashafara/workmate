import React from "react";
// import SelectPassenger from "../components/SelectPassenger";
import Prediction from "../components/Prediction";
import LatestPredictions from "../components/LatestPredictions";

const IndividualPredictions: React.FC = () => {
  return (
    <>
      <div className="pb-5">
        <h1 className="text-2xl font-bold">Individual Predictions</h1>
      </div>
      <div className="flex flex-col ">
        <div className="w-full flex flex-col space-y-5">
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="roc-curve w-full">
              <Prediction />
            </div>
          </div>
          <div>
            <LatestPredictions/>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualPredictions;
