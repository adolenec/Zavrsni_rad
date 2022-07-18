import classes from "./HeaderItem.module.css";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import { constructorsImages } from "../../helpers/image-arrays/constructors-images";
import { formatedDate } from "../../helpers/helper-variables";
import { Link } from "react-router-dom";

const HeaderItem = ({ headerData, endpoint }) => {
  let data = [];
  const todayDate = new Date().toISOString().slice(0, 10);

  if (endpoint === "drivers") {
    data = {
      id: headerData.driverId,
      name: headerData.givenName,
      lastName: headerData.familyName,
      image: driversImages.find((driver) =>
        driver.includes(headerData.familyName)
      ),
    };
  } else if (endpoint === "constructors") {
    data = {
      id: headerData.constructorId,
      name: headerData.name,
      image: constructorsImages.find((constructor) =>
        constructor.includes(headerData.constructorId)
      ),
    };
  } else if (endpoint === "circuits") {
    data = {
      id: headerData.circuitId,
      name: headerData.circuitName,
    };
  } else if (endpoint === "standings") {
    data = {
      id: headerData.Driver.driverId,
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
    if (headerData.date >= todayDate) {
      data = {
        id: headerData.Circuit.circuitId,
        name: headerData.Circuit.circuitName,
        race: formatedRaceDate,
      };
      upcomingRaces.push(data);
    } else {
      return;
    }
  }

  const linkEndpoint =
    endpoint === "standings"
      ? "drivers"
      : endpoint === "schedule"
      ? "circuits"
      : endpoint;

  return (
    <div className={classes["header-item"]}>
      <Link to={`/${linkEndpoint}/${data.id}`}>
        <div className={classes.info}>
          <div className={classes.about}>
            {data.image && <img src={data.image} alt={data.name} />}
            <h4>
              {data.name} {data.lastName}
            </h4>
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
          {data.standingsImage && (
            <img src={data.standingsImage} alt="Driver" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default HeaderItem;
