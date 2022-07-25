import classes from "./SelectedYearConstructorStanding.module.css";

const SelectedYearConstructorStanding = ({ info }) => {
  return (
    <div className={classes["constructor-standing"]}>
      <p>{info.position}</p>
      <p>{info.Constructor.name}</p>
      <p>{info.points}</p>
    </div>
  );
};

export default SelectedYearConstructorStanding;
