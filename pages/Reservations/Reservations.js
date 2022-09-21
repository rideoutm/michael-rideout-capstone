import "./Reservations.scss";

function Reservations() {
  return (
    <section class="reservation">
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
          <div class="firstLastContainer">
            <div class="formInline first">
              <legend>Name*</legend>
              <label class="formLabels" for="firstName">
                <input id="firstName" type="text" required />
                <p>First Name</p>
              </label>
            </div>
            <div class="formInline last">
              <legend id="hidden">Last Name </legend>
              <label class="formLabels" for="lastName">
                <input id="lastNAME" type="text" required />
                <p>Last Name</p>
              </label>
            </div>
          </div>
          <div class="maxLength">
            <legend>Phone Number*</legend>
            <label class="formLabels" for="phone" required>
              <input type="tel" />
            </label>
          </div>
          <div class="maxLength">
            <legend>Email Address</legend>
            <label class="formLabels" for="email">
              <input id="email" type="email" />
            </label>
          </div>
          <div class="maxLength">
            <legend>Party Size*</legend>
            <label class="formLabels" for="">
              <input type="number" required />
            </label>
          </div>
          <div class="maxLength">
            <legend>Date*</legend>
            <label class="formLabels" for="date">
              <input id="dateAttending" type="date" required />
            </label>
          </div>

          <div id="submit">
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservations;
