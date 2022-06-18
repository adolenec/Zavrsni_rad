import classes from './SectionHeader.module.css';

const SectionHeader = (props) => {
    return (
        <div className={classes.header}>
            <h1>{props.title} <i className="fa-solid fa-angle-right"></i></h1>
        </div>
    )
}

export default SectionHeader;