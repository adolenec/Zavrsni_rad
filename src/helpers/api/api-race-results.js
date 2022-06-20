import { setLimit } from "../helper-variables";
import { circuitsImages } from "../circuits-images";

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
