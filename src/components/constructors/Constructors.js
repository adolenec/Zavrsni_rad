import classes from "./Constructors.module.css";
import {
  constructorColor,
  getCurrentYear,
} from "../../helpers/helper-variables";
import { useEffect } from "react";
import { getConstructors } from "../../helpers/api/api-constructors";
import { constructorsNationalityImages } from "../../helpers/image-arrays/constructors-nationalities-images";
import { constructorsImages } from "../../helpers/image-arrays/constructors-images";
import { useState } from "react";
import ConstructorItem from "./ConstructorItem";

const Constructors = () => {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    getConstructors().then((data) => {
      let constructorsInfo = [];
      for (const key in data) {
        constructorsInfo.push({
          ...data[key],
          nationalityImage: constructorsNationalityImages.find((image) =>
            image.includes(data[key].nationality)
          ),
          constructorImage: constructorsImages.find((image) =>
            image.includes(data[key].constructorId)
          ),
          color: constructorColor(data[key].constructorId),
        });
      }
      setConstructors(constructorsInfo);
    });
  }, []);

  return (
    <>
      <div className={classes.title}>
        <h1>{getCurrentYear()} Constructors</h1>
      </div>
      <div className={classes.constructors}>
        {constructors.map((constructor) => (
          <ConstructorItem
            key={constructor.constructorId}
            constructor={constructor}
          />
        ))}
      </div>
    </>
  );
};

export default Constructors;
