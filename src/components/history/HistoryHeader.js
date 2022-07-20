import Wrapper from "../ui/Wrapper";
import classes from "./HistoryHeader.module.css";
import Cars from "../../images/history/cars.jpeg";
import Mercedes from "../../images/history/mercedes.jpeg";

const HistoryHeader = () => {
  return (
    <div className={classes.header}>
      <Wrapper>
        <h1>F1 History</h1>
        <div className={classes.content}>
          <div className={classes["video-container"]}>
            <video autoPlay muted loop>
              <source src="/videos/header-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={classes.info}>
            <div className={classes["info-section"]}>
              <div>
                <img src={Cars} alt="F1 Cars" />
                <p>
                  Explore history about F1 teams, their stats and many more!
                </p>
              </div>
              <div>
                <img src={Mercedes} alt="Mercedes" />
                <p>Find out all about drivers, circuits, results and other stats!</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HistoryHeader;
