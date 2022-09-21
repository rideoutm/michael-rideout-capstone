import React from "react";
import "./Carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {
  return (
    <>
      <div className="carousel">
        <div
          className="carousel__inner"
          style={{ transform: "translateX(-0%" }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
