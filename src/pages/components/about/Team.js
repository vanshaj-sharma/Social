import React from "react";
import "./styles/Team.css";
import test from "../../assets/test.jpg";

function Photos() {
  return (
    <>
      <div className="Photos col-md-3">
        <img className="Photos__content img-fluid" src={test} alt="" />
        <div className="Photos__title text-center">
          <h6>name1</h6>
        </div>
      </div>
    </>
  );
}

function Team() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">Our Team</h3>
        <div className="team__container">
          <Photos />
          <Photos />
          <Photos />
          <Photos />
          <Photos />
          <Photos />
        </div>
      </div>
    </>
  );
}

export default Team;
