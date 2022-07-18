import { formatedDate, getCurrentYear, setLimit } from "../helper-variables";
import { driversImages } from "../image-arrays/drivers-images";
import { driversNationalityImages } from "../image-arrays/drivers-nationalities-images";

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

export async function getDriverDetails(id) {
  let driverDetails;

  try {
    const response = await fetch(`http://ergast.com/api/f1/drivers/${id}.json`);
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();

    driverDetails = {
      id: data.MRData.DriverTable.Drivers[0].driverId,
      name: data.MRData.DriverTable.Drivers[0].givenName,
      lastName: data.MRData.DriverTable.Drivers[0].familyName,
      number: data.MRData.DriverTable.Drivers[0].permanentNumber,
      dateOfBirth: formatedDate(data.MRData.DriverTable.Drivers[0].dateOfBirth),
      nationality: data.MRData.DriverTable.Drivers[0].nationality,
      nationalityImage: driversNationalityImages.find((image) =>
        image.includes(data.MRData.DriverTable.Drivers[0].nationality)
      ),
      driverImage: driversImages.find((image) =>
        image.includes(data.MRData.DriverTable.Drivers[0].familyName)
      ),
    };
  } catch (err) {
    driverDetails = {
      message: err.message,
    };
  }

  return driverDetails;
}
