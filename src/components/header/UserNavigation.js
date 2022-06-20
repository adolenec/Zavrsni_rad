import classes from './UserNavigation.module.css';

const UserNavigation = ({onHideHeader}) => {
    return (
        <nav className={classes.nav} onMouseEnter={onHideHeader}>
            <div className={classes.user}>
                <ul>
                    <li>News Feed</li>
                    <li>My Profile</li>
                    <li>F1 History</li>
                    <button><i className="fa-regular fa-user"></i> SIGN IN</button>
                </ul>
            </div>
        </nav>
    )
}

export default UserNavigation;