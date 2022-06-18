import classes from "./CurrentYearItem.module.css";
import { driversImages } from "../../helpers/drivers-images";
import { driversNationalityImages } from "../../helpers/drivers-nationalities-images";
import { circuitsImages } from "../../helpers/circuits-images";
import { formatedDate } from "../../helpers/helper-variables";

const CurrentYearItem = ({ currentYearData, endpoint }) => {
  let data = currentYearData;

  if (endpoint === "drivers") {
    data = {
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

  if (endpoint === "schedule") {
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
    };
  }

  return (
    <div className={classes.item}>
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
    </div>
  );
};

export default CurrentYearItem;
