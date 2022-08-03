import { useEffect, useState } from "react";
import { getMostRaceWins } from "../../../helpers/api/api-records";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import classes from "./MostRaceWinsChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MostRaceWinsChart = () => {
  const [winners, setWinners] = useState([]);
  const [numberOfWins, setNumberOfWins] = useState([]);

  useEffect(() => {
    getMostRaceWins().then((data) => {
      console.log(data);
      let sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
      let sortedValues = Object.values(data).sort((a, b) => b - a);
      setWinners(sortedKeys.slice(0, 8));
      setNumberOfWins(sortedValues.slice(0, 8));
    });
  }, []);

  const options = {
    label: {
      color: "white",
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Most Race Wins",
        color: "white",
        font: {
          size: "30",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: winners,
    datasets: [
      {
        label: "Number of Wins",
        data: numberOfWins,
        backgroundColor: "#6CD3BF",
      },
    ],
  };

  return (
    <div className={classes["race-winners"]}>
      <Bar data={data} options={options} height={null} width={null} />
    </div>
  );
};

export default MostRaceWinsChart;
