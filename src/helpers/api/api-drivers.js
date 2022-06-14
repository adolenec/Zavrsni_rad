import { getCurrentYear } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getCurrentDrivers() {
  const response = await fetch(
    `http://ergast.com/api/f1/${currentYear}/drivers.json`
  );
  const data = await response.json();

  const drivers = data.MRData.DriverTable.Drivers;

  console.log(drivers);

  return drivers;
}
