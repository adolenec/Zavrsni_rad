import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificConstructorStanding } from "../../helpers/api/api-constructors";
import classes from "./ConstructorStandingDetails.module.css";

const ConstructorStandingDetails = () => {
  const [constructorResults, setConstructorResults] = useState({});
  const params = useParams();

  useEffect(() => {
    getSpecificConstructorStanding(params.constructorId).then((data) =>
      setConstructorResults(data)
    );
  }, [params.constructorId]);

  return (
    <div className={classes.standing}>
      <h1>Last Season Results</h1>
      <div>
        Points: <p>{constructorResults.points}</p>
      </div>
      <div>
        Position:
        <p> {constructorResults.position}</p>
      </div>
      <div>
        Wins: <p>{constructorResults.wins}</p>
      </div>
    </div>
  );
};

export default ConstructorStandingDetails;
