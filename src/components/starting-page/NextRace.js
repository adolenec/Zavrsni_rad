import { useEffect, useState } from "react";
import { getSchedule } from "../../helpers/api/api-schedule";
import { circuitsImages } from "../../helpers/image-arrays/circuits-images";
import { formatedDate, getCurrentYear } from "../../helpers/helper-variables";
import Wrapper from "../ui/Wrapper";
import classes from "./NextRace.module.css";
import { Link } from "react-router-dom";

const NextRace = () => {
  const [nextRace, setNextRace] = useState({});
  const todayDate = new Date().toISOString().slice(0, 10);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSchedule(getCurrentYear()).then((data) => {
      let upcomingRaces = [];
      if (data.message) {
        setError(true);
        return;
      }
      for (const key in data) {
        if (data[key].date >= todayDate) {
          upcomingRaces.push({
            circuitId: data[key].Circuit.circuitId,
            circuitName: data[key].Circuit.circuitName,
            date: formatedDate(data[key].date),
            image: circuitsImages.find((circuitImage) =>
              circuitImage.includes(data[key].Circuit.circuitId)
            ),
            country: data[key].Circuit.Location.country,
          });
        }
      }
      setNextRace(upcomingRaces[0]);
    });
  }, [todayDate]);

  if (error) {
    return;
  }

  return (
    <div className={classes["next-race"]}>
      <Wrapper>
        <div className={classes.info}>
          <div className={classes.header}>
            <p>{nextRace.date}</p>
          </div>
          <div className={classes.main}>
            <div className={classes.image}>
              <img src={nextRace.image} alt={nextRace.circuitName} />
            </div>
            <div className={classes.location}>
              {nextRace.country && (
                <Link to={`/circuits/${nextRace.circuitId}`}>
                  <h2>
                    Next Race: {nextRace.country.toUpperCase()}
                    <i className="fa-solid fa-angle-right"></i>
                  </h2>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NextRace;
