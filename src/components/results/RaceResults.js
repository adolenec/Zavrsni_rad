import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRaceResults } from "../../helpers/api/api-race-results";
import classes from "./RaceResults.module.css";
import { constructorColor } from "../../helpers/helper-variables";
import { constructorsImages } from "../../helpers/image-arrays/constructors-images";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import ResultsItem from "./ResultsItem";

const RaceResults = () => {
  const params = useParams();
  const [circuit, setCircuit] = useState({});
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    let driversArray = [];
    getRaceResults(params.round).then((data) => {
      setCircuit({
        circuitId: data.circuitId,
        circuitImage: data.circuitImage,
        country: data.country,
        name: data.name,
      });
      for (const key in data.results) {
        driversArray.push({
          ...data.results[key].Driver,
          image: driversImages.find((driver) =>
            driver.includes(data.results[key].Driver.familyName)
          ),
          position: data.results[key].position,
          constructorId: data.results[key].Constructor.constructorId,
          constructor: data.results[key].Constructor.name,
          constructorImage: constructorsImages.find((image) =>
            image.includes(data.results[key].Constructor.constructorId)
          ),
          color: constructorColor(data.results[key].Constructor.constructorId),
        });
      }
      setStandings(driversArray);
    });
  }, [params.round]);

  if (!circuit) {
    return;
  }

  return (
    <>
      <div className={classes.header}>
        <div>
          <h1>{circuit.name}</h1>
          <h1>{circuit.country}</h1>
        </div>
        <div className={classes.image}>
          <img src={circuit.circuitImage} alt={circuit.name} />
        </div>
      </div>
      <div className={classes.results}>
        {standings.map((item) => (
          <ResultsItem key={item.driverId} info={item} />
        ))}
      </div>
    </>
  );
};

export default RaceResults;
