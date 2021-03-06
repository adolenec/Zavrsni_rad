import { constructorsImages } from "../image-arrays/constructors-images";
import { constructorsNationalityImages } from "../image-arrays/constructors-nationalities-images";
import { constructorColor, getCurrentYear, setLimit } from "../helper-variables";

const currentYear = getCurrentYear();

export async function getConstructorDetails(id) {
  let constructorDetails;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/constructors/${id}.json`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();

    constructorDetails = {
      id: data.MRData.ConstructorTable.Constructors[0].constructorId,
      name: data.MRData.ConstructorTable.Constructors[0].name,
      nationality: data.MRData.ConstructorTable.Constructors[0].nationality,
      nationalityImage: constructorsNationalityImages.find((image) =>
        image.includes(data.MRData.ConstructorTable.Constructors[0].nationality)
      ),
      constructorImage: constructorsImages.find((image) =>
        image.includes(
          data.MRData.ConstructorTable.Constructors[0].constructorId
        )
      ),
      color: constructorColor(data.MRData.ConstructorTable.Constructors[0].constructorId)
    };
  } catch (err) {
    constructorDetails = {
      message: err.message,
    };
  }

  return constructorDetails;
}

export async function getSpecificConstructorStanding(id) {
  let constructorStanding;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/constructors/${id}/constructorStandings.json?limit=100`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();
    constructorStanding = {
      position:
        data.MRData.StandingsTable.StandingsLists[
          data.MRData.StandingsTable.StandingsLists.length - 1
        ].ConstructorStandings[0].position,
      points:
        data.MRData.StandingsTable.StandingsLists[
          data.MRData.StandingsTable.StandingsLists.length - 1
        ].ConstructorStandings[0].points,
      wins: data.MRData.StandingsTable.StandingsLists[
        data.MRData.StandingsTable.StandingsLists.length - 1
      ].ConstructorStandings[0].wins,
    };
  } catch (err) {
    constructorStanding = {
      message: err.message,
    };
  }

  return constructorStanding;
}

export async function getConstructors() {
  let constructors;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${currentYear}/constructors.json`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }

    const data = await response.json();

    constructors = data.MRData.ConstructorTable.Constructors;
  } catch (err) {
    constructors = {
      message: err.message,
    };
  }

  return constructors;
}

export async function getCurrentConstructorStandings(limit) {
  const limitData = setLimit(limit);
  let currentConstructorStanding;
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/constructorStandings.json?limit=${limitData}`
    );
    if (!response.ok) {
      throw new Error("Couldn't load data");
    }
    const data = await response.json();
    currentConstructorStanding =
      data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  } catch (err) {
    currentConstructorStanding = {
      message: err.message,
    };
  }

  return currentConstructorStanding;
}
