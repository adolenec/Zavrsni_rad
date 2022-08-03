export async function getDriverWinners() {
  let winners = [];
  let count = {};

  try {
    const response = await fetch(
      "http://ergast.com/api/f1/driverStandings/1.json?limit=1000"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    for (const key in data.MRData.StandingsTable.StandingsLists) {
      winners.push(
        data.MRData.StandingsTable.StandingsLists[key].DriverStandings[0].Driver
          .givenName +
          " " +
          data.MRData.StandingsTable.StandingsLists[key].DriverStandings[0]
            .Driver.familyName
      );
    }

    for (const element of winners) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  } catch (err) {
    count = {
      message: err.message,
    };
  }

  return count;
}

export async function getConstructorWinners() {
  let winners = [];
  let count = {};

  try {
    const response = await fetch(
      "http://ergast.com/api/f1/constructorStandings/1.json?limit=1000"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);
    for (const key in data.MRData.StandingsTable.StandingsLists) {
      winners.push(
        data.MRData.StandingsTable.StandingsLists[key].ConstructorStandings[0]
          .Constructor.name
      );
    }

    for (const element of winners) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  } catch (err) {
    count = {
      message: err.message,
    };
  }

  return count;
}

export async function getMostRaceWins() {
  let winners = [];
  let count = {};

  try {
    const response = await fetch(
      "http://ergast.com/api/f1/results/1.json?limit=800&offset=300"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);
    for (const key in data.MRData.RaceTable.Races) {
      winners.push(
        data.MRData.RaceTable.Races[key].Results[0].Driver.givenName + " " +
          data.MRData.RaceTable.Races[key].Results[0].Driver.familyName
      );
    }

    for (const element of winners) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  } catch (err) {
    count = {
      message: err.message,
    };
  }

  return count;
}
