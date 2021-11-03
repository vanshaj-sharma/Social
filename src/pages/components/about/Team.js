import React from "react";
import "./styles/Team.css";

function Photos() {
  return (
    <>
      <div className="Photos col-md-3">
        <div className="Photos__content"></div>
        <div className="Photos__title">
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
        <div className="row">
          <Photos />
          <Photos />
          <Photos />
        </div>
        <div className="row">
          <Photos />
          <Photos />
          <Photos />
        </div>
      </div>
    </>
  );
}

export default Team;
