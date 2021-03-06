import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConstructorDetails } from "../../helpers/api/api-constructors";
import classes from "./ConstructorDetails.module.css";
import ConstructorStandingDetails from "./ConstructorStandingDetails";

const ConstructorDetails = () => {
  const [constructor, setConstructor] = useState({});
  const params = useParams();

  useEffect(() => {
    getConstructorDetails(params.constructorId).then((data) =>
      setConstructor(data)
    );
  }, [params.constructorId]);

  if (Object.keys(constructor).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.constructor}>
      <div className={classes.header}>
        <div className={classes.name}>
          <div
            className={classes.color}
            style={{ backgroundColor: constructor.color }}
          ></div>
          <h1>{constructor.name}</h1>
        </div>
        <div className={classes["nationality-image"]}>
          <img
            src={constructor.nationalityImage}
            alt={constructor.nationality}
          />
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={constructor.constructorImage} alt={constructor.id} />
        </div>
        <div className={classes.info}>
          <div className={classes["constructor-information"]}>
            <h1>Constructor Information</h1>
            <div>
              Name: <p>{constructor.name}</p>
            </div>
            <div>
              Team Nationality: <p> {constructor.nationality}</p>
            </div>
          </div>
          <ConstructorStandingDetails />
        </div>
      </div>
    </div>
  );
};

export default ConstructorDetails;
