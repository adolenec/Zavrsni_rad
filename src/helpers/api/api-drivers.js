import { getCurrentYear } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentYearData(url) {
  const path =
    url[0].toUpperCase() + url.substring(1, url.length - 1) + "Table";
  const urlFraction = url[0].toUpperCase() + url.substring(1);

  const response = await fetch(
    `http://ergast.com/api/f1/${currentYear}/${url}.json`
  );
  const data = await response.json();

  const currentYearData = data.MRData[path][urlFraction];

  return currentYearData;
}

export async function getCurrentDriversStanding(limit) {
  const response = await fetch(
    `http://ergast.com/api/f1/current/driverStandings.json?limit=${limit}`
  );
  const data = await response.json();

  const currentDriverStanding =
    data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  return currentDriverStanding;
}
