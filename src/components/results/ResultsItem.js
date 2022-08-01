import classes from "./ResultsItem.module.css";

const LastRaceResultsItem = ({ info }) => {
  const firstItemClasses =
    info.position === "1"
      ? `${classes.first} ${classes["result-item"]}`
      : classes["result-item"];

  return (
    <div className={firstItemClasses} style={{ borderColor: info.color }}>
      <div className={classes.left}>
        <h2>{info.position}</h2>
        {info.familyName && (
          <div className={classes["driver-image"]}>
            <img src={info.image} alt={info.familyName} />
          </div>
        )}
        {info.constructorNationalityImage && (
          <div className={classes["constructor-nationality-image"]}>
            <img
              src={info.constructorNationalityImage}
              alt={info.constructorId}
            />
          </div>
        )}
        <div className={classes.names}>
          {info.givenName && <h3>{info.givenName}</h3>}
          {info.familyName && <h1>{info.familyName.toUpperCase()}</h1>}
          {info.name && info.constructorNationalityImage && (
            <h1>{info.name.toUpperCase()}</h1>
          )}
        </div>
      </div>
      <div className={classes.right}>
        <div
          className={classes["constructor-image"]}
          style={{
            background: info.color,
            backgroundImage: `url(${info.constructorImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
        </div>
        <div
          className={classes.number}
          style={{ color: !info.points && info.color }}
        >
          {!info.points && <h1>{info.permanentNumber}</h1>}
          {info.points && <h1>{info.points}</h1>}
        </div>
      </div>
    </div>
  );
};

export default LastRaceResultsItem;
