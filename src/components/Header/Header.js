import "./Header.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/square-facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
// import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={navBar ? "navigation--scrollActive" : "navigation"}>
      <div className="navigation__logo">
        <Link to="/">Annabelle</Link>
      </div>
      <div className="navigation__list">
        <div className="navigation__list-item">
          <Link className="navigation__list-item-link" to="">
            WELCOME
          </Link>
        </div>
        <div className="navigation__list-item">
          <Link className="navigation__list-item-link" to="">
            ABOUT
          </Link>
        </div>
        <div className="navigation__list-item">
          <Link className="navigation__list-item-link" to="/menu">
            MENU
          </Link>
        </div>
        <div className="navigation__list-item">
          <Link className="navigation__list-item-link" to="/contact">
            CONTACT
          </Link>
        </div>
        <div className="navigation__list-item navigation__list-item--divider">
          |
        </div>
        <div className="navigation__list-item">
          <a
            href="https://www.facebook.com"
            className="navigation__list-item-link"
          >
            <img
              className="navigation__facebook"
              src={facebook}
              alt="facebook"
            />
          </a>
        </div>
        <div className="navigation__list-item">
          <a
            className="navigation__list-item-link"
            href="https://www.instagram.com"
          >
            <img
              className="navigation__instagram"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
        <div className="navigation__list-item">
          <a
            className="navigation__list-item-link"
            href="https://www.twitter.com"
          >
            <img className="navigation__twitter" src={twitter} alt="twitter" />
          </a>
        </div>
      </div>

      {/* <section class="hero">
        <div
          class="background-image"
          style="background-image: url('assets/main.jpg')"
        ></div>
        <div class="hero-content-area">
          <h1>Restaurant Annabelle</h1>
          <h3></h3>
        </div>
        <a href="reservations.html" class="resBtn">
          Book A Reservation
        </a>
      </section> */}
    </header>
  );
}

export default Header;
