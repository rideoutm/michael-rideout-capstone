import "./BarLounge.scss";
import drinkOne from "../../assets/drinkOne.jpg";
import drinkTwo from "../../assets/drink2.jpg";

function BarLounge() {
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
      <div className="bar-lounge__img">
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
