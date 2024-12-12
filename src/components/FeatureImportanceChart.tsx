import React from "react";
import Plot from "react-plotly.js";

interface FeatureImportanceChartProps {
  featureNames: string[];
  importances: number[];
}

const featureNames = [
  "Agriculture Land (Acres)",
  "Food Banana",
  "Farm Implements Owned",
  "Total Household Members",
  "Sweet Potatoes",
  "Ground Nuts",
  "Coffee",
  "Business Participation",
];
const importances = [
  0.0927, 0.0609, 0.0518, 0.0517, 0.0507, 0.0378, 0.0315, 0.0303,
];

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = () => {
  return (
    <div className="w-full border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">
          Feature Importance Chart
        </h2>
        <p>What were the most important features?</p>
      </div>

      <Plot
        data={[
          {
            type: "bar",
            x: importances,
            y: featureNames,
            orientation: "h", // Horizontal bar chart
            width: 0.8,
            marker: {
              color: "#ea580c",
            },
          },
        ]}
        layout={{
          title: "Feature Importance",
          xaxis: {
            title: "Importance",
          },
          yaxis: {
            title: "Features",
            automargin: true,
          },
          margin: {
            l: 150, // Adjust margin to fit long feature names
            r: 20,
            t: 50,
            b: 50,
          },
          bargap: 0,
          // add full width
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default FeatureImportanceChart;
