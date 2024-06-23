import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import "./chart.css"
import {
  IconTrendingUp,
} from "@tabler/icons-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const Chartline = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 55, 40, 65, 75, 55],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false
      },
    }
  };

  return (
    <div style={{ display: "flex", marginTop: "2rem"}} className="chartcard">
     <div className="card-container">
     <div>
          <div style={{ marginRight: "1rem" }}>
            <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: "bold" }}>
              Recent Workflow
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", color: "green", marginTop:"0.5rem" }}>
          <IconTrendingUp />
          <span style={{ marginLeft: "4px", marginRight: "4px" }}>17%</span>
          </div>
        </div>
      <div style={{ width: "18rem", height: "30rem" }}>
      <Line data={data} options={options} />
      </div>
      </div>
    </div>
    
  );
};

export default Chartline;
