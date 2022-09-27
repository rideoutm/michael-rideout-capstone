import "./Modal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Modal(show, setShow) {
  //   const [className, setClassName] = useState("modal");

  //   const changeClassName = () => {
  //     if (show) {
  //       setClassName("modal--visible");
  //     }
  //     if (!show) {
  //       setClassName("modal");
  //     }
  //   };

  const resetState = () => {
    setShow(false);
  };

  return (
    <>
      {console.log("show:", show)}
      <div className={show.show ? "modal--visible" : "modal"}>
        <Link to="/">
          <div onClick={resetState} className="modal__link">
            WELCOME
          </div>
        </Link>
        <Link to="/menu">
          <div className="modal__link">MENU</div>
        </Link>
        <Link to="/contact">
          <div className="modal__link">CONTACT</div>
        </Link>
        <div className="modal__link"></div>
      </div>
    </>
  );
}

export default Modal;
