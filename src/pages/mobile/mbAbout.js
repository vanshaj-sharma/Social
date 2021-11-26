import "./styles/mbAbout.css";
import We from "./components/about/We";
import Team from "./components/about/Team";
import Clientel from "./components/about/Clientel";
import { useState } from "react";

function MbAbout() {
  const [select, setSelected] = useState("0");
  return (
    <>
      <h1
        style={{
          animation: "animate__about ease-in-out 1s",
        }}
        className="about__title"
      >
        ABOUT US
      </h1>
      <div className="about__page__mb">
        <div className="about__content">
          {select === "0" && <We />}
          {select === "1" && <Team />}
          {select === "2" && <Clientel />}
        </div>

        <div>
          <div className="about__buttons">
            <button className="mb__button__ab" onClick={() => setSelected("0")}>
              WHO ARE WE?
            </button>
            <button className="mb__button__ab" onClick={() => setSelected("1")}>
              TEAM
            </button>
            <button className="mb__button__ab" onClick={() => setSelected("2")}>
              CLIENTELE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MbAbout;
