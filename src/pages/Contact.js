import React from "react";
import "./styles/Contact.css";
import { NavLink } from "react-router-dom";

function Contact() {
  const buttonToggle = () => {
    const toggler = document.querySelector(".button__toggle");
    toggler.classList.toggle("button__toggle__active");
  };

  return (
    <>
      <div className="desktop">
        {/* lower shit show */}
        <div className="contact__box">
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-6 contact__heading">
              <h1>CONTACT US</h1>
            </div>
          </div>
          {/* <div className="back__logo">
            <NavLink to="/">
              <i class="fas fa-3x fa-arrow-right"></i>
            </NavLink>
          </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-6 contact__left">
                <div className="contact__left__box">
                  <p>ADDRESS</p>
                  <p>BK DUTT GATE, AMRITSAR, PUNJAB, IN 143001</p>
                  <p>PHONE</p>
                  <p>+91-95014-46674</p>
                  <p>MAIL</p>
                  <p>CONTACT@ THEGRAPHIC SOCIAL .COM</p>
                </div>
              </div>
              <div className="col-6 col-lg-6 d-flex flex-column  contact__right">
                <button className="button" onClick={() => buttonToggle()}>
                  ENQUIRE NOW
                </button>
                <div className="button__toggle">
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
                <button className="button">SCHEDULE A CALL</button>
                <button className="button">GET DIRECTIONS</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs" style={{ animation: "transitionUp 0.9s" }}>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/work">OUR WORK</NavLink>
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="text-light">
              <i className="pr-5 fas fa-2x fa-times"></i>
            </NavLink>
          </div>
          <NavLink to="/about">ABOUT US</NavLink>
        </div>
      </div>

      <div className="mobile"></div>
    </>
  );
}

export default Contact;
