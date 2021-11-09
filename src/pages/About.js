import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Team from "./components/about/Team.js";
import We from "./components/about/We.js";
import "./styles/About.css";

function About() {
  const [select, setSelected] = useState("0");
  // const activate = (index) => {
  //   let toggler = document.querySelectorAll(".content");
  //   toggler[index].classList.toggle("content__active");
  //   for (let i = 0; i < 3; i++) {
  //     if (i === index) continue;
  //     toggler[i].classList.remove("content__active");
  //   }
  // };
  // useEffect(() => {
  //   activate(0);
  // }, []);
  return (
    <>
      <div className="desktop">
        {/* lower shit show */}
        <div className="about__box">
          <div className="row ">
            <div className="col-7 col-lg-9"></div>
            <div className="col-5 col-lg-3 about__heading">
              <h1>ABOUT US</h1>
            </div>
          </div>
          <div className="back__logo">
            <NavLink to="/">
              <i className="fab fa-3x fa-slack"></i>
            </NavLink>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-7 col-lg-9 about__left">
                {select === "0" && (
                  <div className="content__active">
                    <We />
                  </div>
                )}
                {select === "1" && (
                  <div className="content__active">
                    <Team />
                  </div>
                )}
                {select === "2" && <h1 className="content__active">hello3</h1>}
              </div>

              <div className="col-5 col-lg-3 d-flex flex-column  about__right">
                <button
                  className="button"
                  onClick={() => {
                    setSelected("0");
                  }}
                >
                  <a>WHO ARE WE?</a>
                </button>

                <button
                  className="button"
                  onClick={() => {
                    setSelected("1");
                  }}
                >
                  <a>OUR TEAM</a>
                </button>

                <button
                  className="button"
                  onClick={() => {
                    setSelected("2");
                  }}
                >
                  <a>CLIENTLE</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tabs"
          style={{
            paddingRight: "10rem",
            animation: "transitionUp 0.9s",
          }}
        >
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/work">OUR WORK</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>

          <div></div>
        </div>
      </div>

      <div className="mobile"></div>
    </>
  );
}

export default About;
