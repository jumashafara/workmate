import React, { useEffect, useState, createContext } from "react";
// import SelectPassenger from "../components/SelectPassenger";
import Prediction from "../components/Prediction";
import LatestPredictions from "../components/LatestPredictions";
import FeatureInput from "../components/FeatureInput";
import { getSampleData } from "../api/SampleData";

const IndividualPredictions: React.FC = () => {
  const SampleDataContext = createContext<any[]>([]);

  const [sampleData, setSampleData] = useState<any[]>([]);

  const fetchSampleData = async () => {
    const data = await getSampleData();
    setSampleData(data);
  };

  useEffect(() => {
    fetchSampleData();
  }, []);
  console.log(sampleData);

  return (
    <>
      <SampleDataContext.Provider value={sampleData}>
        <div className="pb-5 font-roboto">
          <h1 className="text-2xl font-bold">Individual Predictions</h1>
        </div>
        <div className="flex flex-col ">
          <div className="w-full flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row md:space-x-5">
              <div className="roc-curve w-full">
                <Prediction sampleData={sampleData}/>
              </div>
            </div>
            <div>
              <FeatureInput/>
            </div>
            <div>
              <LatestPredictions />
            </div>
          </div>
        </div>
      </SampleDataContext.Provider>
    </>
  );
};

export default IndividualPredictions;
