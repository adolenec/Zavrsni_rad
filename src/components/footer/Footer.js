import classes from "./Footer.module.css";
import Logo from "../../images/logo.png";
import Wrapper from "../ui/Wrapper";

const Footer = () => {
  return (
    <div className={classes.container}>
      <Wrapper>
        <div className={classes.footer}>
          <div className={classes.user}>
            <p>Sign up for full F1 experience and unlock access to many cool features!</p>
            <button>
              <i className="fa-regular fa-user"></i> SIGN UP
            </button>
          </div>
          <div className={classes.links}>
            <div className={classes.standings}>
              <ul>
                <li>Drivers Standings</li>
                <li>Constructors Standings</li>
              </ul>
            </div>
            <div className={classes.participants}>
              <ul>
                <li>Drivers</li>
                <li>Constructors</li>
              </ul>
            </div>
            <div className={classes.races}>
              <ul>
                <li>Schedule</li>
                <li>Circuits</li>
              </ul>
            </div>
            <div className={classes.history}>
              <ul>
                <li>F1 History</li>
              </ul>
            </div>
          </div>
          <div className={classes.logo}>
            <img src={Logo} alt="F1 Logo" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
