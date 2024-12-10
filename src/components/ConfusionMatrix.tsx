import React from "react";
import Plot from "react-plotly.js";

const ConfusionMatrix: React.FC = () => {
  // Example confusion matrix data
  const matrixData = [
    [1627, 607],
    [592, 1480],
  ];

  const labels = ["Negative", "Positive"];

  return (
    <div className="confusion-matrix border border-gray-300">
      <div className="bg-gray-200 p-3">
        <h2 className="text-lg font-semibold mb-4 w-full">Confusion Matrix</h2>
        <h2>How many false positives and false negatives?</h2>
      </div>
      <Plot
        data={[
          {
            z: matrixData,
            x: labels,
            y: labels,
            type: "heatmap",
            colorscale: [
              [0, "rgb(255, 255, 255)"], // White for the lowest value
              [0.5, "rgb(173, 216, 230)"], // Light Blue for middle values
              [1, "rgb(0, 0, 128)"], // Dark Blue for the highest value
            ], // Custom colors

            showscale: true, // Show the color scale
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
        style={{ width: "99%", height: "100%" }}
      />
    </div>
  );
};

export default ConfusionMatrix;
