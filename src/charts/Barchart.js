import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./chart.css";
import {
    IconTrendingUp,
  } from "@tabler/icons-react";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Barchart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Bar Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 55, 40, 65, 75, 55],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  };

  return (
    <div
      style={{ display: "flex", marginTop: "2rem" }}
      className="chartcard"
    >
      <div className="card-container">
        <div>
          <div >
            <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: "bold" }}>
              Recent Marketing
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", color: "green", marginTop:"0.5rem" }}>
          <IconTrendingUp />
          <span style={{ marginLeft: "4px", marginRight: "4px" }}>17%</span>
          </div>
        </div>
        <div style={{ width: "18rem", height: "30rem" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Barchart;
