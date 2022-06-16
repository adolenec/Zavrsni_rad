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
