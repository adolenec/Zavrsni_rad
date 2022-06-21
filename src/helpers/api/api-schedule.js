import { getCurrentYear, setLimit } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentSchedule(limit) {
  const limitData = setLimit(limit);
  let schedule;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${currentYear}.json?limit=${limitData}`
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
