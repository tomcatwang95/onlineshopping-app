import React, { useState } from "react";
import ImageList from "../Data/ImageData";
import "./Carousel.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="imageslider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {ImageList.map((image, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={image.img} alt="images" />}
          </div>
        );
      })}
    </div>
  );
}
export default Carousel;
