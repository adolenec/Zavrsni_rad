import classes from "./ImageSlider.module.css";
import { useEffect, useState } from "react";

const ImageSlider = ({imageArray, delay}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevState) => (prevState + 1) % imageArray.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={classes.slider}>
      <img
        className={classes["slider-img"]}
        src={imageArray[activeIndex]}
        alt="Driver"
      />
    </div>
  );
};

export default ImageSlider;
