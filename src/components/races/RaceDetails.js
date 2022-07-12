import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCircuitDetails } from "../../helpers/api/api-schedule";
import classes from "./RaceDetails.module.css";

const RaceDetails = () => {
  const [raceDetails, setRaceDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getCircuitDetails(params.circuitId).then((data) => setRaceDetails(data));
  }, [params.circuitId]);

  if (Object.keys(raceDetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.race}>
      <div className={classes.header}>
        <h1>{raceDetails.name}</h1>
        <div className={classes["nationality-image"]}>
          <img src={raceDetails.nationalityImage} alt={raceDetails.cuntry} />
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={raceDetails.image} alt={raceDetails.id} />
        </div>
        <div className={classes.info}>
          <h1>Race Information</h1>
          <div>
            Circuit name: <p> {raceDetails.name}</p>
          </div>
          <div>
            Country: <p>{raceDetails.country} </p>
          </div>
          <div>
            Locality: <p>{raceDetails.locality} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceDetails;
