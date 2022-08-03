import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

import { getDriverWinners } from "../../../helpers/api/api-records";
import classes from "./TitlesChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const TitlesChart = () => {
  const [titles, setTitles] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriverWinners().then((data) => {
      let sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
      let sortedValues = Object.values(data).sort((a, b) => b - a);
      setDrivers(sortedKeys.slice(0, 10));
      setTitles(Object.values(sortedValues).slice(0, 10));
    });
  }, []);

  const data = {
    labels: drivers,
    datasets: [
      {
        label: "Number of titles",
        data: titles,
        backgroundColor: [
          "rgb(93, 0, 0)",
          "rgb(144, 11, 11)",
          "rgb(225, 0, 0)",
          "rgb(183, 58, 58)",
          "rgb(229, 66, 66)",
          "rgb(255, 77, 77)",
          "rgb(255, 117, 117)",
          "rgb(255, 147, 147)",
          "rgb(255, 169, 169)",
          "rgb(230, 160, 160)",
        ],
        borderWidth: 0,
        borderColor: "black",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Most Titles By Driver",
        color: "white",
        font: {
          size: "30",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={classes.titles}>
      <Doughnut data={data} height={null} width={null} options={options} />
    </div>
  );
};

export default TitlesChart;
