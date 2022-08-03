import { useEffect, useState } from "react";
import { getMostFastestLaps } from "../../../helpers/api/api-records";

import classes from "./MostFastestLapsChart.module.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const MostFastestLapsChart = () => {
  const [drivers, setDrivers] = useState([]);
  const [fastestLaps, setFastestLaps] = useState([]);

  useEffect(() => {
    getMostFastestLaps().then((data) => {
      let sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
      let sortedValues = Object.values(data).sort((a, b) => b - a);
      setDrivers(sortedKeys.slice(0, 5));
      setFastestLaps(sortedValues.slice(0, 5));
    });
  }, []);

  console.log(drivers, fastestLaps);

  const data = {
    labels: drivers,
    datasets: [
      {
        label: "Number of titles",
        data: fastestLaps,
        backgroundColor: [
          "rgb(93, 0, 0)",
          "rgb(225, 0, 0)",
          "rgb(229, 66, 66)",
          "rgb(255, 117, 117)",
          "rgb(255, 169, 169)",
        ],
        borderWidth: 0,
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
          size: "25",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={classes["fastest-laps"]}>
      <Pie data={data} options={options} widt={null} height={null} />
    </div>
  );
};

export default MostFastestLapsChart;
