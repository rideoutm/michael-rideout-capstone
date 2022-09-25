import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.scss";
import data from "../../assets/Data/Reviews.json";
import Slider from "react-slick";
import carouselQuote from "../../assets/quote-right-solid.svg";

import reviewCar1 from "../../assets/reviewCar1.jpg";
import reviewCar2 from "../../assets/reviewCarNew3.jpg";
import reviewCar3 from "../../assets/reviewCar3.jpg";

function ReviewCarousel() {
  const resRef = useRef();
  const [resAnim, setResAnim] = useState();

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    const resObserver = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        setResAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          resObserver.unobserve(resRef.current);
        }
      },
      { threshold: 0.9 }
    );

    resObserver.observe(resRef.current);
  }, [resRef]);

  return (
    <>
      <div className="review-carousel">
        <div className="review-carousel__left">
          <div className="review-carousel__tag">
            <h1 className="review-carousel__header">Reviews</h1>
          </div>
          <div className="review-carousel__imgslider">
            <Slider {...settings}>
              {data.map((item) => {
                return (
                  <div
                    key={Math.random() * 1000}
                    className="review-carousel__comment"
                  >
                    <div className="review-carousel__name">{item.name}</div>
                    <div className="review-carousel__comment-quote">
                      <img
                        className="review-carousel__quote-img"
                        src={carouselQuote}
                        alt="quote"
                      ></img>
                      {item.comment}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div ref={resRef} className="review-carousel__right">
          <img
            className={
              resAnim
                ? "review-carousel__right-img1--anim"
                : "review-carousel__right-img1"
            }
            src={reviewCar1}
            alt="review carousel one"
          />
          <img
            className={
              resAnim
                ? "review-carousel__right-img2--anim"
                : "review-carousel__right-img2"
            }
            src={reviewCar2}
            alt="review carousel two"
          />
          <img
            className={
              resAnim
                ? "review-carousel__right-img3--anim"
                : "review-carousel__right-img3"
            }
            src={reviewCar3}
            alt="review carousel two"
          />
        </div>
      </div>
    </>
  );
}

export default ReviewCarousel;
