import "./Header.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/square-facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
// import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";

function Header() {
  const [navBar, setNavBar] = useState(false);
  const [show, setShow] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  const handleModal = () => {
    setShow(!show);
    console.log(show);
    return show;
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={navBar ? "navigation--scrollActive" : "navigation"}>
      <div className="navigation__logo">
        <Link to="/michael-rideout-capstone">Annabelle</Link>
      </div>

      <div onClick={() => handleModal()} className="navigation__mob-menu">
        <div className="navigation__mob-menu-line1"></div>
        <div className="navigation__mob-menu-line2"></div>
        <div className="navigation__mob-menu-line3"></div>
      </div>
      <Modal setShow={setShow} show={show} />
      <div className="navigation__list">
        <div className="navigation__list-item">
          <Link
            className="navigation__list-item-link"
            to="/michael-rideout-capstone"
          >
            WELCOME
          </Link>
        </div>
        {/* <div className="navigation__list-item">
          <Link className="navigation__list-item-link" to="">
            ABOUT
          </Link>
        </div> */}
        <div className="navigation__list-item">
          <Link
            className="navigation__list-item-link"
            to="/michael-rideout-capstone/menu"
          >
            MENU
          </Link>
        </div>
        <div className="navigation__list-item">
          <Link
            className="navigation__list-item-link"
            to="/michael-rideout-capstone/contact"
          >
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
