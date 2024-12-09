import React from "react";
import Plot from "react-plotly.js";

const ConfusionMatrix: React.FC = () => {
  // Example confusion matrix data
  const matrixData = [
    [1627,  607],
  [592, 1480]
  ];


  

  const labels = ["Negative", "Positive"];

  return (
    <div className="confusion-matrix">
        <h2 className="text-lg font-semibold mb-4 w-full">Confusion Matrix</h2>
      <Plot
        data={[
          {
            z: matrixData,
            x: labels,
            y: labels,
            type: "heatmap",
            colorscale: "Viridis", // Customize colors
            showscale: true,       // Show the color scale
          },
        ]}
        layout={{
          title: "Confusion Matrix",
          xaxis: {
            title: "Predicted Label",
          },
          yaxis: {
            title: "True Label",
            autorange: "reversed", // Reverse y-axis to align with typical confusion matrix visuals
          },
          height: 500,
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default ConfusionMatrix;

