import { formatedDate } from "../../../helpers/helper-variables";
import classes from "./SelectedYearDriver.module.css";

const SelectedYearDriver = ({ info }) => {
  return (
    <div className={classes.driver}>
      <p>
        {info.givenName} {info.familyName.toUpperCase()}
      </p>
      <p>{formatedDate(info.dateOfBirth)}</p>
      <p>{info.nationality}</p>
      <h3>{info.permanentNumber}</h3>
    </div>
  );
};

export default SelectedYearDriver;
