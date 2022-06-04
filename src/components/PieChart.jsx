import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function PieChart({ chartData }) {
  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
}
