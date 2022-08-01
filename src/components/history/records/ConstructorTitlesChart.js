import React from "react";
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

import { useEffect, useState } from "react";

import { getConstructorWinners } from "../../../helpers/api/api-winners";
import classes from "./ConstructorTitlesChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ConstructorTitlesChart = () => {
  const [titles, setTitles] = useState([]);
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    getConstructorWinners().then((data) => {
      let sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
      let sortedValues = Object.values(data).sort((a, b) => b - a);
      console.log(sortedValues);
      setConstructors(sortedKeys);
      setTitles(Object.values(sortedValues));
    });
  }, []);

  console.log(titles, constructors);

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
        text: "Most Titles By Constructor",
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
    labels: constructors,
    datasets: [
      {
        label: "Number of Constructor Titles",
        data: titles,
        backgroundColor: "rgba(255, 99, 132, .8)",
      },
    ],
  };

  return (
    <div className={classes["constructor-titles"]}>
      <Bar data={data} options={options} height={null} width={null} />
    </div>
  );
};

export default ConstructorTitlesChart;
