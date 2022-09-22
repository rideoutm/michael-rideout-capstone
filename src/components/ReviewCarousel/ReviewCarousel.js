import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.scss";
import data from "../../assets/Data/Reviews.json";
import Slider from "react-slick";

// export const CarouselItem = ({ children, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: width }}>
//       {children}
//     </div>
//   );
// };

// function Carousel({ children }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <div className="carousel">
//         <div
//           className="carousel__inner"
//           style={{ transform: `translateX(- ${activeIndex & 100}%` }}
//         >
//           {React.Children.map(children, (child, index) => {
//             return React.cloneElement(child, { width: "100%" });
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Carousel;

function ReviewCarousel() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="review-carousel">
        <div className="review-carousel__tag">
          <h1 className="review-carousel__header">Reviews</h1>
        </div>
        <div className="review-carousel__imgslider">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div
                  className="review-carousel__comment-cont"
                  key={Math.random() * 1000}
                >
                  <div className="review-carousel__comment">
                    <div className="review-carousel__name">{item.name}</div>
                    {item.comment}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ReviewCarousel;
