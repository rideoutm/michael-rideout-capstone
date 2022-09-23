import "./BarLounge.scss";
import drinkOne from "../../assets/drinkOne.jpg";
import drinkTwo from "../../assets/drink2.jpg";
import { useState, useRef, useEffect } from "react";

function BarLounge() {
  const [thirdImgAnim, setThirdImgAnim] = useState();

  const thirdImage = useRef();

  useEffect(() => {
    const observer3 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setThirdImgAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer3.unobserve(thirdImage.current);
        }
      },
      { threshold: 1 }
    );
    observer3.observe(thirdImage.current);
  }, []);
  return (
    <div className="bar-lounge">
      <div className="bar-lounge__text">
        <h2 className="bar-lounge__header">{`Bar & Lounge`}</h2>
        <p className="bar-lounge__description">
          One of the focal points of Annabelle is our stylish, high-profile bar.
          It's the perfect place to get together, relax, and connect over
          drinks. Whether you want to enjoy a classic, one of our exotic
          signature cocktails, or a glass of wine from our award-winning
          beverage list, you will certainly enjoy the atmosphere and ambiance
          you'll find here.
        </p>
      </div>
      <div
        ref={thirdImage}
        className={
          thirdImgAnim ? "bar-lounge__img" : "bar-lounge__img--blurred"
        }
      >
        <img
          className="bar-lounge__img-back-layer"
          src={drinkTwo}
          alt="drink image one"
        />
        <img
          className="bar-lounge__img-top-layer"
          src={drinkOne}
          alt="drink image two"
        />
      </div>
    </div>
  );
}

export default BarLounge;
