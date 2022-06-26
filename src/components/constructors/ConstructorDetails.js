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

  return (
    <div className={classes.constructor}>
      <div className={classes.name}>
        {constructor.name && <h1>{constructor.name}</h1>}
      </div>
      <div className={classes.main}>
        <div className={classes.image}>
          {constructor.constructorImage && (
            <img src={constructor.constructorImage} alt={constructor.id} />
          )}
        </div>
        <div className={classes.info}>
          <div className={classes["constructor-information"]}>
            <h1>Constructor Information</h1>
            <div>Name: {constructor.name && <p>{constructor.name}</p>}</div>
            <div>
              Team Nationality:{" "}
              {constructor.nationality && <p> {constructor.nationality}</p>}
            </div>
          </div>
          <ConstructorStandingDetails />
        </div>
      </div>
    </div>
  );
};

export default ConstructorDetails;