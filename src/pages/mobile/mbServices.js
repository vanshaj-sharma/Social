import "./styles/mbServices.css";
import { useState } from "react";
import Branding from "./components/services/Branding";
function MbServices() {
  const [select, setSelected] = useState("");
  const activate = () => {
    let menu = document.querySelector(".menu");
    let menuContent = document.querySelector(".menu__content");
    menu.classList.toggle("menu__deactivate");
    menuContent.className = "menu__content";
  };
  return (
    <>
      <div className="menu">
        <h1 className="s_title">SERVICES</h1>
        <div className="s_headings">
          <h1
            onClick={() => {
              setSelected("0");
              activate();
            }}
          >
            BRANDING
          </h1>
          <h1
            onClick={() => {
              setSelected("1");
              activate();
            }}
          >
            INFLUENTIAL MARKETING
          </h1>
          <h1
            onClick={() => {
              setSelected("2");
              activate();
            }}
          >
            DESIGNING
          </h1>
          <h1
            onClick={() => {
              setSelected("3");
              activate();
            }}
          >
            SOCIAL MARKETING
          </h1>
          <h1
            onClick={() => {
              setSelected("4");
              activate();
            }}
          >
            PHOTOGRAPHY
          </h1>
        </div>
      </div>
      <div className="menu__content">
        {select === "0" && <Branding />}
        {select === "1" && <Branding />}
        {select === "2" && <Branding />}
        {select === "3" && <Branding />}
        {select === "4" && <Branding />}
      </div>
    </>
  );
}

export default MbServices;
