import { getCurrentYear, setLimit } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentYearData(url, limit) {
  const limitData = setLimit(limit);
  const path =
    url[0].toUpperCase() + url.substring(1, url.length - 1) + "Table";
  const urlFraction = url[0].toUpperCase() + url.substring(1);
  let currentYearData;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${currentYear}/${url}.json?limit=${limitData}`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }

    const data = await response.json();

    currentYearData = data.MRData[path][urlFraction];
  } catch (err) {
    currentYearData = {
      message: err.message,
    };
  }

  return currentYearData;
}

export async function getCurrentDriversStanding(limit) {
  const limitData = setLimit(limit);
  let currentDriverStanding;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/driverStandings.json?limit=${limitData}`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();
    currentDriverStanding =
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  } catch (err) {
    currentDriverStanding = {
      message: err.message,
    };
  }

  return currentDriverStanding;
}
