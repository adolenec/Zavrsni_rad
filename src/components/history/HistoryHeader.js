import Wrapper from "../ui/Wrapper";
import classes from "./HistoryHeader.module.css";
import Senna from "../../images/history/Senna.jpeg";

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
            <h2>Explore F1 History</h2>
            <div className={classes["info-item"]}>
              <p>Find all drivers throughout the entire F1 history.</p>
              <img src={Senna} alt="Ayrton Senna" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HistoryHeader;
