import { useState } from "react";
import { useEffect } from "react";
import { getCurrentDriversStanding } from "../../../helpers/api/api-drivers";
import {
  constructorColor,
  getCurrentYear,
} from "../../../helpers/helper-variables";
import { constructorsImages } from "../../../helpers/image-arrays/constructors-images";
import { driversImages } from "../../../helpers/image-arrays/drivers-images";
import ResultsItem from "../ResultsItem";
import classes from "./DriverStandings.module.css";

const DriverStandings = () => {
  const [driverStanding, setDriverStanding] = useState([]);
  const [showStanding, setShowStanding] = useState(true);

  const toggleStanding = () => {
    setShowStanding((prevState) => !prevState);
  };

  useEffect(() => {
    let driversArray = [];
    getCurrentDriversStanding().then((data) => {
      for (const key in data) {
        driversArray.push({
          ...data[key].Driver,
          ...data[key].Constructors[0],
          image: driversImages.find((image) =>
            image.includes(data[key].Driver.familyName)
          ),
          constructorImage: constructorsImages.find((image) =>
            image.includes(data[key].Constructors[0].constructorId)
          ),
          position: data[key].position,
          points: data[key].points,
          color: constructorColor(data[key].Constructors[0].constructorId),
        });
      }
      setDriverStanding(driversArray);
    });
  }, []);

  return (
    <>
      <div className={classes.header} onClick={toggleStanding}>
        <h1>
          {getCurrentYear()} Driver Standings{" "}
          {showStanding && <i className="fa-solid fa-angle-down"></i>}
          {!showStanding && <i className="fa-solid fa-angle-up"></i>}
        </h1>
      </div>
      {showStanding && (
        <div className={classes["driver-standings"]}>
          {driverStanding.map((driver) => (
            <ResultsItem info={driver} key={driver.driverId} />
          ))}
        </div>
      )}
    </>
  );
};

export default DriverStandings;
