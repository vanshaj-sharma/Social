import "./styles/mbContact.css";
function MbContact() {
  const buttonToggle = () => {
    const toggler = document.querySelector(".mb__button__toggle");
    toggler.classList.toggle("mb__button__toggle__active");
  };
  const schedule = () => {
    const toggler = document.querySelector(".contact__form");
    toggler.classList.toggle("contact__activate");
  };
  return (
    <>
      <h1
        style={{
          animation: "animate__service ease-in-out 1s",
        }}
        className="contact__title"
      >
        CONTACT US
      </h1>

      <div
        style={{
          overflowY: "scroll",
          height: "100vh",
          animation: "animate__service ease-in-out 1s",
        }}
      >
        <div className="contact__buttons">
          <button className="mb__button" onClick={() => buttonToggle()}>
            ENQUIRE NOW
          </button>
          <div className="mb__button__toggle">
            <a href="tel:+919501446674">
              <i className="fas fa-2x fa-phone"></i>
            </a>
            <a href="mailto:CONTACT@THEGRAPHICSOCIAL.COM">
              <i className="far fa-2x fa-envelope"></i>
            </a>
            <a href="https://wa.me/+919501446674">
              <i className="fab fa-2x fa-whatsapp"></i>
            </a>
          </div>
          <button
            className="mb__button"
            onClick={() => {
              schedule();
            }}
          >
            SCHEDULE A CALL
          </button>
          <form action="" className="contact__form">
            <input id="fname" type="text" placeholder="First Name" />
            <input id="lname" type="text" placeholder="Last Name" />
            <input id="meeting" type="date" />
            <input id="meeting" type="time" />
            <button className="btn btn-outline-light" type="submit">
              Submit
            </button>
          </form>
          <button className="mb__button">GET DIRECTIONS</button>
        </div>
        <div className="contact__content">
          <h3>ADDRESS</h3>
          <p>BK DUTT GATE, AMRITSAR, PUNJAB, IN 143001</p>
          <h3>PHONE</h3>
          <p>+91-95014-46674</p>
          <h3>MAIL</h3>
          <p>CONTACT@ THEGRAPHIC SOCIAL .COM</p>
        </div>
      </div>
    </>
  );
}

export default MbContact;
