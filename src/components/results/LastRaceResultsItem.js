import classes from "./LastRaceResultsItem.module.css";

const LastRaceResultsItem = ({ driverInfo }) => {
  const firstItemClasses =
    driverInfo.position === "1"
      ? `${classes.first} ${classes["result-item"]}`
      : classes["result-item"];

  return (
    <div className={firstItemClasses} style={{ borderColor: driverInfo.color }}>
      <div className={classes.left}>
        <h2>{driverInfo.position}</h2>
        <div className={classes["driver-image"]}>
          <img src={driverInfo.image} alt={driverInfo.familyName} />
        </div>
        <div className={classes.names}>
          <h3>{driverInfo.givenName}</h3>
          <h1 style={{ color: driverInfo.color }}>
            {driverInfo.familyName.toUpperCase()}
          </h1>
        </div>
      </div>
      <div className={classes.right}>
        <div
          className={classes["constructor-image"]}
          style={{ background: driverInfo.color }}
        >
          <img src={driverInfo.constructorImage} alt={driverInfo.constructor} />
        </div>
        <div className={classes.number} style={{ color: driverInfo.color }}>
          <h1>{driverInfo.permanentNumber}</h1>
        </div>
      </div>
    </div>
  );
};

export default LastRaceResultsItem;
