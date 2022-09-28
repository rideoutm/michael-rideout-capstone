import "./Modal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Modal(show, setShow) {
  return (
    <>
      {console.log("show:", show)}
      <div className={show.show ? "modal--visible" : "modal"}>
        <Link onClick={() => setShow(false)} to="/michael-rideout-capstone">
          <div className="modal__link">WELCOME</div>
        </Link>
        <Link onClick={() => setShow(false)} to="/menu">
          <div className="modal__link">MENU</div>
        </Link>
        <Link onClick={() => setShow(false)} to="/contact">
          <div className="modal__link">CONTACT</div>
        </Link>
        <div className="modal__link"></div>
      </div>
    </>
  );
}

export default Modal;
