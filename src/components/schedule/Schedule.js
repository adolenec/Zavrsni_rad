import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSchedule } from "../../helpers/api/api-schedule";
import { formatedDate, getCurrentYear } from "../../helpers/helper-variables";
import { circuitsImages } from "../../helpers/image-arrays/circuits-images";
import { circuitsNationalitiesImages } from "../../helpers/image-arrays/circuits-nationalities-images";
import CurrentYearItem from "../starting-page/CurrentYearItem";
import classes from "./Schedule.module.css";

const Schedule = () => {
  const [upcomingRaces, setUpcomingRaces] = useState([]);
  const [nextRace, setNextRace] = useState({});
  const todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    getSchedule(getCurrentYear()).then((data) => {
      let upcomingRacesArray = [];
      for (const key in data) {
        if (data[key].date >= todayDate) {
          upcomingRacesArray.push({ ...data[key] });
        }
      }
      setNextRace({
        ...upcomingRacesArray[0],
        circuitImage: circuitsImages.find((image) =>
          image.includes(upcomingRacesArray[0].Circuit.circuitId)
        ),
        circuitNationalityImage: circuitsNationalitiesImages.find((image) =>
          image.includes(upcomingRacesArray[0].Circuit.Location.country)
        ),
      });
      setUpcomingRaces(upcomingRacesArray.slice(1));
    });
  }, [todayDate]);

  if (Object.keys(nextRace).length === 0) {
    return <div>Loading...</div>;
  }
  console.log(nextRace);
  console.log(upcomingRaces);

  return (
    <>
      <div className={classes.title}>
        <h1>Upcoming Races</h1>
      </div>
      <div className={classes["next-race"]}>
        <div className={classes.header}>
          <div className={classes["header-info"]}>
            <h5>ROUND {nextRace.round} - UP NEXT</h5>
            <Link to={`/circuits/${nextRace.Circuit.circuitId}`}>
              <h2>{nextRace.Circuit.Location.country.toUpperCase()} <i className="fa-solid fa-angle-right"></i></h2>
              <h5>{nextRace.Circuit.circuitName.toUpperCase()}</h5>
            </Link>
          </div>
          <div className={classes["nationality-image"]}>
            <img
              src={nextRace.circuitNationalityImage}
              alt={nextRace.raceName}
            />
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes["circuit-image"]}>
            <img
              src={nextRace.circuitImage}
              alt={nextRace.Circuit.circuitName}
            />
          </div>
          <div className={classes.time}>
            <div>
              <span>PRACTICE 1 </span>{" "}
              <p>{nextRace.FirstPractice.time.slice(0, 5)}</p>{" "}
              <p>{formatedDate(nextRace.FirstPractice.date)}</p>
            </div>
            <div>
              <span>PRACTICE 2 </span>
              <p>{nextRace.SecondPractice.time.slice(0, 5)}</p>{" "}
              <p>{formatedDate(nextRace.SecondPractice.date)}</p>
            </div>
            <div>
              <span>PRACTICE 3 </span>
              <p>{nextRace.ThirdPractice.time.slice(0, 5)}</p>{" "}
              <p>{formatedDate(nextRace.ThirdPractice.date)}</p>
            </div>
            <hr />
            <div>
              <span>QUALIFYING </span>
              <p>{nextRace.Qualifying.time.slice(0, 5)}</p>{" "}
              <p>{formatedDate(nextRace.Qualifying.date)}</p>
            </div>
            <div>
              <span>RACE </span>
              <p>{nextRace.time.slice(0, 5)}</p>{" "}
              <p>{formatedDate(nextRace.date)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["previous-races"]}>
        {upcomingRaces.map((race) => (
          <CurrentYearItem
            currentYearData={race}
            endpoint="circuits"
            key={race.Circuit.circuitId}
          />
        ))}
      </div>
      <div className={classes["upcoming-races"]}></div>
    </>
  );
};

export default Schedule;
