import { useEffect, useState } from "react";
import { getCurrentYearData } from "../../helpers/api/api-drivers";
import SectionHeader from "../ui/SectionHeader";
import Wrapper from "../ui/Wrapper";
import classes from "./CurrentGrid.module.css";
import CurrentYearItem from "./CurrentYearItem";

const CurrentGrid = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getCurrentYearData("drivers", 4).then((data) => setDrivers(data));
  }, []);

  if (drivers.message) {
    return <div>Couldn't load data</div>;
  }

  return (
    <Wrapper>
      <SectionHeader title="Current Grid" endpoint="drivers" />
      <div className={classes["current-grid"]}>
        {drivers.map((driver) => (
          <CurrentYearItem
            key={driver.driverId}
            currentYearData={driver}
            endpoint="drivers"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CurrentGrid;
