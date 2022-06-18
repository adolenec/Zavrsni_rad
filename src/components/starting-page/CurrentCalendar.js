import classes from "./CurrentCalendar.module.css";
import SectionHeader from "../ui/SectionHeader";
import { getCurrentYear } from "../../helpers/helper-variables";
import Wrapper from "../ui/Wrapper";
import { useEffect, useState } from "react";
import { getCurrentSchedule } from "../../helpers/api/api-schedule";
import CurrentYearItem from "./CurrentYearItem";

const currentYear = getCurrentYear();

const CurrentCalendar = () => {
  const [schedule, setSchedule] = useState([]);
  const title = `${currentYear} Calendar`;

  useEffect(() => {
    getCurrentSchedule(4).then((data) => setSchedule(data));
  }, []);

  return (
    <Wrapper>
      <SectionHeader title={title} />
      <div className={classes["current-calendar"]}>
        {schedule.map((race) => (
          <CurrentYearItem
            key={race.Circuit.circuitId}
            currentYearData={race}
            endpoint="schedule"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CurrentCalendar;