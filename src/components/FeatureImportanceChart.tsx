import React from "react";
import Plot from "react-plotly.js";

interface FeatureImportanceChartProps {
  featureNames: string[];
  importances: number[];
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({
  featureNames,
  importances,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 w-full">Feature Importance</h2>
      <Plot
        data={[
          {
            type: "bar",
            x: importances,
            y: featureNames,
            orientation: "h", // Horizontal bar chart
            width: 0.5,
            marker: {
              color: "rgb(55, 83, 109)",
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
          //   height: 400,
          //   width: 700,
          bargap: 0,
        }}
      />
    </div>
  );
};

export default FeatureImportanceChart;
