import classes from "./CurrentYearItem.module.css";
import { driversImages } from "../../helpers/drivers-images";
import { driversNationalityImages } from "../../helpers/drivers-nationalities-images";

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

  return (
    <div className={classes.item}>
      <div className={classes.number}>
        <p>{data.number}</p>
      </div>
      <div className={classes["driver-info"]}>
        <div className={classes.names}>
          <p>{data.name}</p>
          <h3>{data.lastName.toUpperCase()}</h3>
        </div>
        <div className={classes['nationality-image']}>
          <img src={data.nationalityImage} alt={data.nationality}/>
        </div>
      </div>
      <div className={classes.image}>
        <img src={data.image} alt={data.familyName} />
      </div>
    </div>
  );
};

export default CurrentYearItem;
