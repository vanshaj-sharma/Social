import React from "react";
import "./styles/Contact.css";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="desktop">
        {/* lower shit show */}
        <div className="contact__box">
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3 contact__heading">
              <h1>CONTACT US</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-6 contact__left">
                <table class="table table-borderless text-light">
                  <tbody>
                    <tr>
                      <td className="table__left">ADDRESS</td>
                      <td className="table__right">
                        BK DUTT GATE, AMRITSAR, PUNJAB, IN 143001
                      </td>
                    </tr>
                    <tr>
                      <td className="table__left">PHONE</td>
                      <td className="table__right">+91-95014-46674</td>
                    </tr>
                    <tr>
                      <td className="table__left">MAIL</td>
                      <td className="table__right">
                        CONTACT@THEGRAPHICSOCIAL.COM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-6 col-lg-6 d-flex flex-column  contact__right">
                <button className="button">ENQUIRE NOW</button>
                <button className="button">SCHEDULE A CALL</button>
                <button className="button">GET DIRECTIONS</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs" style={{ animation: "transitionUp 0.9s" }}>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/">OUR WORK</NavLink>
          <div></div>
          <NavLink to="/">ABOUT US</NavLink>
        </div>
      </div>

      <div className="mobile"></div>
    </>
  );
}

export default Contact;
