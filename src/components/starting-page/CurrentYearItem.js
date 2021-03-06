import classes from "./CurrentYearItem.module.css";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import { driversNationalityImages } from "../../helpers/image-arrays/drivers-nationalities-images";
import { circuitsImages } from "../../helpers/image-arrays/circuits-images";
import { formatedDate } from "../../helpers/helper-variables";
import { Link } from "react-router-dom";
import chequeredFlag from "../../images/chequered.png";

const CurrentYearItem = ({ currentYearData, endpoint }) => {
  let data = currentYearData;
  const todayDate = new Date().toISOString().slice(0, 10);

  if (endpoint === "drivers") {
    data = {
      id: data.driverId,
      name: data.givenName,
      lastName: data.familyName,
      number: data.permanentNumber,
      nationality: data.nationality,
      image: driversImages.find((driverImage) =>
        driverImage.includes(data.familyName)
      ),
      nationalityImage: driversNationalityImages.find((nationalityImage) =>
        nationalityImage.includes(data.nationality)
      ),
    };
  }

  if (endpoint === "circuits" || endpoint === "schedule") {
    const formatedRaceDate = formatedDate(data.date);
    data = {
      name: data.Circuit.circuitName,
      id: data.Circuit.circuitId,
      date: formatedRaceDate,
      raceName: data.raceName,
      round: data.round,
      image: circuitsImages.find((circuit) =>
        circuit.includes(data.Circuit.circuitId)
      ),
      isPrevious: data.date < todayDate ? true : false,
    };
  }

  return (
    <div
      className={classes.item}
      style={{ backgroundImage: data.isPrevious && `url(${chequeredFlag})` }}
    >
      <Link to={`${endpoint}/${data.id}`}>
        <div className={classes.header}>
          {data.number && <p>{data.number}</p>}
          {data.raceName && <p>{data.raceName}</p>}
        </div>
        <div className={classes.info}>
          <div className={classes.names}>
            {data.name && <p>{data.name}</p>}
            {data.lastName && <h3>{data.lastName}</h3>}
            {data.date && <p>{data.date}</p>}
            {data.round && <p>Round: {data.round}</p>}
          </div>
          {data.nationalityImage && (
            <div className={classes["nationality-image"]}>
              <img src={data.nationalityImage} alt={data.nationality} />
            </div>
          )}
        </div>
        {data.image && (
          <div className={classes.image}>
            <img src={data.image} alt={data.name} />
          </div>
        )}
      </Link>
      {data.isPrevious && (
        <div className={classes["results-btn"]}>
          <Link to={`/results/${data.round}`}><button>See results</button></Link>
        </div>
      )}
    </div>
  );
};

export default CurrentYearItem;
