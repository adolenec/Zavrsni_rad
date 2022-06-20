import { getCurrentYear, setLimit } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentSchedule(limit) {
  const limitData = setLimit(limit);
  const response = await fetch(
    `http://ergast.com/api/f1/${currentYear}.json?limit=${limitData}`
  );
  const data = await response.json();

  const schedule = data.MRData.RaceTable.Races;

  return schedule;
}
