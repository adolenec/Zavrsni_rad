import { getCurrentYear } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentSchedule(limit) {
  let limitData;
  if (limit) {
    limitData = limit;
  } else {
    limitData = 25;
  }
  const response = await fetch(
    `http://ergast.com/api/f1/${currentYear}.json?limit=${limitData}`
  );
  const data = await response.json();

  const schedule = data.MRData.RaceTable.Races;

  return schedule;
}
