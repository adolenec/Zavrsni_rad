import classes from "./SelectedYearConstructor.module.css";

const SelectedYearConstructor = ({ info }) => {
  return (
    <div className={classes.constructor}>
      <h3>{info.name}</h3>
      <p>{info.nationality}</p>
    </div>
  );
};

export default SelectedYearConstructor;
