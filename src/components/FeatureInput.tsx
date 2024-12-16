import React, { useState } from "react";

type FeatureInputProps = {
  hhid: string;
  cluster: string;
  prediction: number;
  Land_size_for_Crop_Agriculture_Acres: number;
  farm_implements_owned: number;
  tot_hhmembers: number;
  Average_Water_Consumed_Per_Day: number;
  perennial_crops_grown_food_banana: number;
  sweet_potatoes: number;
  ground_nuts: number;
  irish_potatoes: number;
  business_participation: number;
  cassava: number;
  maize: number;
  vsla_participation: number;
};

const FeatureInput: React.FC = () => {
  const [features, setFeatures] = useState<FeatureInputProps>({
    hhid: "",
    cluster: "",
    prediction: 0,
  Land_size_for_Crop_Agriculture_Acres: 0,
  farm_implements_owned: 0,
  tot_hhmembers: 0,
  Average_Water_Consumed_Per_Day: 0,
  perennial_crops_grown_food_banana: 0,
  sweet_potatoes: 0,
  ground_nuts: 0,
  irish_potatoes: 0,
  business_participation: 0,
  cassava: 0,
  maize: 0,
  vsla_participation: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(features);
  };

  return (
    <div className="w-full border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">Feature Input</h2>
        <p>Adjust the feature values to change the prediction</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(features).map((key) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-sm font-semibold capitalize">
                {key.replace(/_/g, " ")}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={features[key as keyof FeatureInputProps]}
                onChange={handleInputChange}
                className="border rounded p-2"
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FeatureInput;
