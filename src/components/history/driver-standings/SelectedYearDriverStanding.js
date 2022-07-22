import classes from './SelectedYearDriverStanding.module.css';

const SelectedYearDriverStanding = ({info}) => {
    return (
        <div className={classes['driver-standing']}>
            <p>{info.position}</p>
            <p>{info.Driver.givenName} {info.Driver.familyName.toUpperCase()}</p>
            <p>{info.Constructors[0].name}</p>
            <p>{info.points}</p>
        </div>
    )
}

export default SelectedYearDriverStanding;