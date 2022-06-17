import { getCurrentYear } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentSchedule() {
  const response = await fetch(`http://ergast.com/api/f1/${currentYear}.json`);
  const data = await response.json();

  const schedule = data.MRData.RaceTable.Races;

  return schedule;
}
