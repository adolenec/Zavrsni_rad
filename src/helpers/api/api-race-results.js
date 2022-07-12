import { setLimit } from "../helper-variables";
import { circuitsImages } from "../image-arrays/circuits-images";
import { getCurrentYear } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getLastRaceResults(limit) {
  const limitData = setLimit(limit);
  let raceData;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/last/results.json?limit=${limitData}`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    raceData = {
      name: data.MRData.RaceTable.Races[0].Circuit.circuitName,
      circuitId: data.MRData.RaceTable.Races[0].Circuit.circuitId,
      circuitImage: circuitsImages.find((image) =>
        image.includes(data.MRData.RaceTable.Races[0].Circuit.circuitId)
      ),
      round: data.MRData.RaceTable.round,
      country: data.MRData.RaceTable.Races[0].Circuit.Location.country,
      results: data.MRData.RaceTable.Races[0].Results,
    };
  } catch (err) {
    raceData = {
      message: err.message,
    };
  }

  return raceData;
}

export async function getRaceResults(round, limit) {
  let resultsData;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${currentYear}/${round}/results.json`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data!");
    }
    const data = await response.json();
    // console.log(data);
    resultsData = {
      name: data.MRData.RaceTable.Races[0].Circuit.circuitName,
      circuitId: data.MRData.RaceTable.Races[0].Circuit.circuitId,
      circuitImage: circuitsImages.find((image) =>
        image.includes(data.MRData.RaceTable.Races[0].Circuit.circuitId)
      ),
      country: data.MRData.RaceTable.Races[0].Circuit.Location.country,
      results: data.MRData.RaceTable.Races[0].Results,
    };
  } catch (err) {
    resultsData = {
      message: err.message,
    };
  }

  return resultsData;
}
