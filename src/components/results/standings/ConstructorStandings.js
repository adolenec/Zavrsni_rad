import classes from "./ConstructorStandings.module.css";
import { useState, useEffect } from "react";
import {
  constructorColor,
  getCurrentYear,
} from "../../../helpers/helper-variables";
import { getConstructorStandings } from "../../../helpers/api/api-constructors";
import { constructorsImages } from "../../../helpers/image-arrays/constructors-images";
import ResultItem from "../ResultsItem";
import { constructorsNationalityImages } from "../../../helpers/image-arrays/constructors-nationalities-images";
import { AnimatePresence, motion } from "framer-motion";

const ConstructorStandings = () => {
  const [constructorStanding, setConstructorStanding] = useState([]);
  const [showStanding, setShowStanding] = useState(false);

  const toggleStanding = () => {
    setShowStanding((prevState) => !prevState);
  };

  useEffect(() => {
    let constructorsArray = [];
    getConstructorStandings(getCurrentYear()).then((data) => {
      for (const key in data) {
        constructorsArray.push({
          ...data[key].Constructor,
          points: data[key].points,
          position: data[key].position,
          constructorImage: constructorsImages.find((image) =>
            image.includes(data[key].Constructor.constructorId)
          ),
          color: constructorColor(data[key].Constructor.constructorId),
          constructorNationalityImage: constructorsNationalityImages.find(
            (image) => image.includes(data[key].Constructor.nationality)
          ),
          isConstructor: true,
        });
      }
      setConstructorStanding(constructorsArray);
    });
  }, []);

  return (
    <>
      <div className={classes.header} onClick={toggleStanding}>
        <h1>
          {getCurrentYear()} Constructor Standings{" "}
          {showStanding && <i className="fa-solid fa-angle-down"></i>}
          {!showStanding && <i className="fa-solid fa-angle-up"></i>}
        </h1>
      </div>
      <AnimatePresence inital={false}>
        {showStanding && (
          <motion.div
            className={classes["constructor-standings"]}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: 'linear' }}
          >
            {constructorStanding.map((constructor) => (
              <ResultItem info={constructor} key={constructor.constructorId} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConstructorStandings;
