import classes from "./SelectedYearCircuit.module.css";

const SelectedYearCircuit = ({ info }) => {
  return (
    <div className={classes.circuit}>
      <p>{info.round}</p>
      <p>{info.raceName}</p>
      <p>{info.Circuit.circuitName}</p>
      <p>{info.Circuit.Location.country}</p>
    </div>
  );
};

export default SelectedYearCircuit;
