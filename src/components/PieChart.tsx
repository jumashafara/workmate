import React from "react";
import Plot from "react-plotly.js";

interface chartData {
  values: number[];
  labels: string[];
  title: string;
}

const PieChart: React.FC<chartData> = (chartData) => {
  // Sample data for the pie chart
  const data = [
    {
      values: chartData.values,
      labels: chartData.labels,
      type: "pie",
    },
  ];

  // Layout configuration for the pie chart
  const layout = {
    title: chartData.title,
  };

  return (
    <div>
      <Plot data={data} layout={layout} style={{width: '90%'}} />
    </div>
  );
};

export default PieChart;
