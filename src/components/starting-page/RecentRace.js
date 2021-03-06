import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLastRaceResults } from "../../helpers/api/api-race-results";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import Wrapper from "../ui/Wrapper";
import classes from "./RecentRace.module.css";

const RecentRace = () => {
  const [recentRaceData, setRecentRaceData] = useState({});

  useEffect(() => {
    getLastRaceResults(3).then((data) => {
      for (const key in data.results) {
        data.results[key].Driver = {
          ...data.results[key].Driver,
          image: driversImages.find((driver) =>
            driver.includes(data.results[key].Driver.familyName)
          ),
        };
      }
      setRecentRaceData(data);
    });
  }, []);

  if (recentRaceData.message) {
    return (
      <div className={classes.container}>
        <p>Something went wrong. Couldn't load last race results</p>
      </div>
    );
  }

  if (Object.keys(recentRaceData).length === 0) {
    return;
  }

  return (
    <div className={classes.container}>
      <Wrapper>
        <div className={classes.header}>
          <div className={classes["header-info"]}>
            <h1>{recentRaceData.name}</h1>
            <h1>{recentRaceData.country}</h1>
          </div>
          <div className={classes.image}>
            <img src={recentRaceData.circuitImage} alt={recentRaceData.name} />
          </div>
        </div>
        <div className={classes.drivers}>
          <div className={classes.second}>
            <h2>2nd Place</h2>
            <img
              src={recentRaceData.results[1].Driver.image}
              alt={recentRaceData.results[1].Driver.familyName}
            />
            <h4>
              {recentRaceData.results[1].Driver.givenName}{" "}
              {recentRaceData.results[1].Driver.familyName.toUpperCase()}
            </h4>
          </div>
          <div className={classes.first}>
            <h2>Winner</h2>
            <img
              src={recentRaceData.results[0].Driver.image}
              alt={recentRaceData.results[0].Driver.familyName}
            />
            <h4>
              {recentRaceData.results[0].Driver.givenName}{" "}
              {recentRaceData.results[0].Driver.familyName.toUpperCase()}
            </h4>
          </div>
          <div className={classes.third}>
            <h2>3rd Place</h2>
            <img
              src={recentRaceData.results[2].Driver.image}
              alt={recentRaceData.results[2].Driver.familyName}
            />
            <h4>
              {recentRaceData.results[2].Driver.givenName}{" "}
              {recentRaceData.results[2].Driver.familyName.toUpperCase()}
            </h4>
          </div>
        </div>
        <div className={classes.btn}>
          <Link to={`/results/${recentRaceData.round}`}>
            <button>Full Results</button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default RecentRace;
