import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDriverDetails } from "../../helpers/api/api-drivers";
import classes from "./DriverDetails.module.css";

const DriverDetails = () => {
  const [driver, setDriver] = useState({});
  const params = useParams();

  useEffect(() => {
    getDriverDetails(params.driverId).then((data) => setDriver(data));
  }, [params.driverId]);

  if (driver.message) {
    return <div>Couldn't load data</div>;
  }

  if (Object.keys(driver).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.driver}>
      <div className={classes.header}>
        <div className={classes.names}>
          <p>{driver.name}</p>
          <h1>{driver.lastName}</h1>
        </div>
        <div className={classes["nationality-image"]}>
          <img src={driver.nationalityImage} alt={driver.nationality} />
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={driver.driverImage} alt={driver.id} />
        </div>
        <div className={classes.info}>
          <h1>Driver Information</h1>
          <div>
            Name: <p> {driver.name}</p>
          </div>
          <div>
            Last Name: <p> {driver.lastName}</p>
          </div>
          <div>
            Nationality: <p> {driver.nationality}</p>
          </div>
          <div>
            Date of Birth: <p> {driver.dateOfBirth}</p>
          </div>
          <div>
            Number: <p> {driver.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
