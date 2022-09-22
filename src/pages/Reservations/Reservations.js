import "./Reservations.scss";
import { useRef } from "react";
import downArrow from "../../assets/angle-down-solid.svg";

function Reservations({ resScrollRef, resScrollTo }) {
  return (
    <>
      <div className="reservation-page__header">
        <h1 className="res-page-heading">RESERVATIONS</h1>
        <div className="hero__scroll-to" onClick={resScrollTo}>
          <img
            className="hero__scroll-to-img"
            src={downArrow}
            alt="scroll to"
          />
        </div>
      </div>
      <section ref={resScrollRef} className="reservationPage">
        <div id="reservationTitle">
          <p>Reservations</p>
          <div id="reservSubText">
            <p>
              For parties of 4 or more, we recommend making reservations minimum
              three weeks in advance. For walk-ins, we only seat parties on a
              first come, first served basis.
            </p>
          </div>
        </div>
        <div id="reservationForm">
          <form action="">
            <div className="firstLastContainer">
              <div className="formInline first">
                <legend>Name*</legend>
                <label className="formLabels" htmlFor="firstName">
                  <input id="firstName" type="text" required />
                  <p>First Name</p>
                </label>
              </div>
              <div className="formInline last">
                <legend id="hidden">Last Name </legend>
                <label className="formLabels" htmlFor="lastName">
                  <input id="lastNAME" type="text" required />
                  <p>Last Name</p>
                </label>
              </div>
            </div>
            <div className="maxLength">
              <legend>Phone Number*</legend>
              <label className="formLabels" htmlFor="phone" required>
                <input type="tel" />
              </label>
            </div>
            <div className="maxLength">
              <legend>Email Address</legend>
              <label className="formLabels" htmlFor="email">
                <input id="email" type="email" />
              </label>
            </div>
            <div className="maxLength">
              <legend>Party Size*</legend>
              <label className="formLabels" htmlFor="">
                <input type="number" required />
              </label>
            </div>
            <div className="maxLength">
              <legend>Date*</legend>
              <label className="formLabels" htmlFor="date">
                <input id="dateAttending" type="date" required />
              </label>
            </div>

            <div id="submit">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Reservations;
