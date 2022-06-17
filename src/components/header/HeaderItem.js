import classes from "./HeaderItem.module.css";
import { driversImages } from "../../helpers/drivers-images";

const HeaderItem = ({ headerData, endpoint }) => {
  let data = [];
  const todayDate = new Date().toISOString().slice(0, 10);

  if (endpoint === "drivers") {
    data = {
      name: headerData.givenName,
      lastName: headerData.familyName,
    };
  } else if (endpoint === "constructors") {
    data = {
      name: headerData.name,
    };
  } else if (endpoint === "circuits") {
    data = {
      name: headerData.circuitName,
    };
  } else if (endpoint === "standings") {
    data = {
      name: headerData.Driver.givenName,
      lastName: headerData.Driver.familyName,
      position: headerData.position,
      points: headerData.points,
      image: driversImages.find((driver) =>
        driver.includes(headerData.Driver.familyName)
      ),
    };
  } else {
    let upcomingRaces = [];
    const formatedRaceDate = headerData.date.replaceAll("-", "/");
    if (headerData.date > todayDate) {
      data = {
        name: headerData.Circuit.circuitName,
        race: formatedRaceDate,
      };
      upcomingRaces.push(data);
    } else {
      return;
    }
  }

  return (
    <div className={classes["header-item"]}>
      <div className={classes.info}>
        <h3>
          {data.name} {data.lastName}
        </h3>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
      <div>
        <div className={classes["upcoming-races"]}>
          {data.race && <p>Date: {data.race}</p>}
        </div>
        {data.position && <p>Ranking: {data.position}</p>}
        {data.points && <p>Points: {data.points}</p>}
      </div>
      {data.image && <img src={data.image} alt="Driver" />}
    </div>
  );
};

export default HeaderItem;
