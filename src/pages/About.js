import React from "react";
import { NavLink } from "react-router-dom";
import Team from "./components/about/Team.js";
import "./styles/About.css";

function About() {
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-7 col-lg-9 about__left ">
                <p>
                  We are a digital agency. We deal with almost everything
                  starting from influencer marketing, designing, social media,
                  photography campaigns, photo and video editing, website
                  development to complete digital marketing.
                </p>
                <p>
                  You see something that has to be done for your brand on the
                  internet? We can make it happen.
                </p>
                <p>
                  From planning out your social media to curating content for
                  it, we got an arsenal of services so you don’t have to go out
                  looking for different things and bring them together.
                </p>
                <p>
                  With as vision of simplicity, we started as an organisation
                  that does what is necessary and leave out anything that won’t
                  bring about a difference. This lets us keep our vision for
                  each brand straight without clutter or confusion.
                </p>
                <hr />
                <div id="team">
                  <Team />
                </div>
              </div>

              <div className="col-5 col-lg-3 d-flex flex-column  about__right">
                <button className="button">
                  <a href="#team">TEAM</a>
                </button>

                <button className="button">
                  <a href="#clientle">CLIENTLE</a>
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
