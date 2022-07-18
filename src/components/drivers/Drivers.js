import classes from "./Drivers.module.css";
import { useState, useEffect } from "react";
import { getCurrentYearData } from "../../helpers/api/api-drivers";
import { driversNationalityImages } from "../../helpers/image-arrays/drivers-nationalities-images";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import { getCurrentYear } from "../../helpers/helper-variables";
import CurrentYearItem from "../starting-page/CurrentYearItem";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getCurrentYearData("drivers").then((data) => {
      let driversInfo = [];
      for (const key in data) {
        driversInfo.push({
          ...data[key],
          nationalityImage: driversNationalityImages.find((image) =>
            image.includes(data[key].nationality)
          ),
          driverImage: driversImages.find((image) =>
            image.includes(data[key].familyName)
          ),
        });
      }
      setDrivers(driversInfo);
    });
  }, []);

  console.log(drivers);

  if (drivers.message) {
    return <div>Couldn't load data</div>;
  }

  return (
    <>
      <div className={classes.title}>
        <h1>{getCurrentYear()} Drivers</h1>
      </div>
      <div className={classes.drivers}>
        {drivers.map((driver) => (
          <CurrentYearItem
            key={driver.driverId}
            currentYearData={driver}
            endpoint="drivers"
          />
        ))}
      </div>
    </>
  );
};

export default Drivers;
