import classes from "./HeaderItem.module.css";
import { driversImages } from "../../helpers/drivers-images";
import { constructorsImages } from "../../helpers/constructors-images";
import { formatedDate } from "../../helpers/helper-variables";

const HeaderItem = ({ headerData, endpoint }) => {
  let data = [];
  const todayDate = new Date().toISOString().slice(0, 10);

  if (endpoint === "drivers") {
    data = {
      name: headerData.givenName,
      lastName: headerData.familyName,
      image: driversImages.find((driver) =>
        driver.includes(headerData.familyName)
      ),
    };
  } else if (endpoint === "constructors") {
    data = {
      name: headerData.name,
      image: constructorsImages.find((constructor) =>
        constructor.includes(headerData.constructorId)
      ),
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
      standingsImage: driversImages.find((driver) =>
        driver.includes(headerData.Driver.familyName)
      ),
    };
  } else {
    let upcomingRaces = [];
    const formatedRaceDate = formatedDate(headerData.date);
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
        <div className={classes.about}>
          {data.image && <img src={data.image} alt={data.name} />}
          <h3>
            {data.name} {data.lastName}
          </h3>
        </div>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
      <div>
        <div className={classes["upcoming-races"]}>
          {data.race && <p>{data.race}</p>}
        </div>
        {data.position && <p>Ranking: {data.position}</p>}
        {data.points && <p>Points: {data.points}</p>}
      </div>
      <div className={classes["standings-image"]}>
        {data.standingsImage && <img src={data.standingsImage} alt="Driver" />}
      </div>
    </div>
  );
};

export default HeaderItem;
