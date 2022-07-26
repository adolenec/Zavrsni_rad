import { setLimit } from "../helper-variables";
import { circuitsImages } from "../image-arrays/circuits-images";
import { circuitsNationalitiesImages } from "../image-arrays/circuits-nationalities-images";

// const currentYear = getCurrentYear();

export async function getSchedule(year, limit) {
  const limitData = setLimit(limit);
  let schedule;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${year}.json?limit=${limitData}`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();
    schedule = data.MRData.RaceTable.Races;
  } catch (err) {
    schedule = {
      message: err.message,
    };
  }

  return schedule;
}

export async function getCircuitDetails(id) {
  let circuitDetails;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/circuits/${id}.json`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();
    circuitDetails = {
      id: data.MRData.CircuitTable.Circuits[0].circuitId,
      name: data.MRData.CircuitTable.Circuits[0].circuitName,
      country: data.MRData.CircuitTable.Circuits[0].Location.country,
      locality: data.MRData.CircuitTable.Circuits[0].Location.locality,
      image: circuitsImages.find((image) =>
        image.includes(data.MRData.CircuitTable.Circuits[0].circuitId)
      ),
      nationalityImage: circuitsNationalitiesImages.find((image) =>
        image.includes(data.MRData.CircuitTable.Circuits[0].Location.country)
      ),
    };
  } catch (err) {
    circuitDetails = {
      message: err.message,
    };
  }

  return circuitDetails;
}
