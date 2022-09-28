import "./Modal.scss";
import { Link } from "react-router-dom";

function Modal(show, setShow) {
  return (
    <>
      {console.log("show:", show)}
      <div className={show.show ? "modal--visible" : "modal"}>
        <Link to="/michael-rideout-capstone">
          <div className="modal__link">WELCOME</div>
        </Link>
        <Link to="/michael-rideout-capstone/menu">
          <div className="modal__link">MENU</div>
        </Link>
        <Link to="/michael-rideout-capstone/contact">
          <div className="modal__link">CONTACT</div>
        </Link>
        <div className="modal__link"></div>
      </div>
    </>
  );
}

export default Modal;