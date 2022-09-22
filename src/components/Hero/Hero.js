import "./Hero.scss";
import { Link } from "react-router-dom";

import downArrow from "../../assets/angle-down-solid.svg";
import Intro from "../Intro/Intro";

function Hero({ scrollTo }) {
  return (
    <div className="hero">
      {/* <div className="hero__background-image"></div> */}
      <div className="hero__content-area">
        <div className="hero__annabelle-title">Annabelle</div>
        <h1 className="hero__restaurant-title">RESTAURANT</h1>
        <div className="hero__sub-title">WHERE FOOD IS PASSION</div>
      </div>
      <Link to="/reservations" className="hero__res-btn">
        Reservations
      </Link>

      <div className="hero__scroll-to" onClick={scrollTo}>
        <img className="hero__scroll-to-img" src={downArrow} alt="scroll to" />
      </div>
    </div>
  );
}

export default Hero;
