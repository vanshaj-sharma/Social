import React from "react";
import "./styles/Team.css";

function Photos() {
  return (
    <>
      <div className="Photos">
        <div className="Photos__content"></div>
        <div className="Photos__title d-flex justify-content-center">
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
        <div className="d-flex">
          <Photos />
          <Photos />
          <Photos />
        </div>
        <div className="d-flex">
          <Photos />
          <Photos />
          <Photos />
        </div>
      </div>
    </>
  );
}

export default Team;
