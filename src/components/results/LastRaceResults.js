import { useState } from "react";
import { useEffect } from "react";
import { getLastRaceResults } from "../../helpers/api/api-race-results";
import { constructorColor } from "../../helpers/helper-variables";
import { constructorsImages } from "../../helpers/image-arrays/constructors-images";
import { driversImages } from "../../helpers/image-arrays/drivers-images";
import classes from "./LastRaceResults.module.css";
import ResultsItem from "./ResultsItem";

const LastRaceResults = () => {
  const [circuit, setCircuit] = useState({});
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    let driversArray = [];
    getLastRaceResults().then((data) => {
      console.log(data);
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
  }, []);

  console.log(standings);

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
          <ResultsItem key={item.driverId} driverInfo={item} />
        ))}
      </div>
    </>
  );
};

export default LastRaceResults;
