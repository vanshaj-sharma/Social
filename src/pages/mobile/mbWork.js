import { useState } from "react";
import Branding from "./components/work/Branding.js";
function MbWork() {
  const [clicked, setclicked] = useState("");
  const activate = () => {
    let menu = document.querySelector(".menu");
    let menuContent = document.querySelector(".menu__content");
    menu.classList.toggle("menu__deactivate");
    menuContent.className = "menu__content";
  };
  return (
    <>
      <h1 className="s_title">WORK</h1>
      <div className="menu">
        <div className="s_headings">
          <h1
            onClick={() => {
              setclicked("0");
              activate();
            }}
          >
            BRANDING
          </h1>
          <h1
            onClick={() => {
              setclicked("1");
              activate();
            }}
          >
            PHOTOGRAPHY
          </h1>
          <h1
            onClick={() => {
              setclicked("2");
              activate();
            }}
          >
            VIDEOGRAPHY
          </h1>
          <h1
            onClick={() => {
              setclicked("3");
              activate();
            }}
          >
            PHOTO EDITING
          </h1>
          <h1
            onClick={() => {
              setclicked("4");
              activate();
            }}
          >
            VIDEO EDITING
          </h1>
          <h1
            onClick={() => {
              setclicked("5");
              activate();
            }}
          >
            BRAND STRATEGY
          </h1>
          <h1
            onClick={() => {
              setclicked("6");
              activate();
            }}
          >
            SOCIAL MEDIA
          </h1>
        </div>
      </div>
      <div className="menu__content">
        {clicked === "0" && <Branding />}
        {clicked === "1" && <Branding />}
        {clicked === "2" && <Branding />}
        {clicked === "3" && <Branding />}
        {clicked === "4" && <Branding />}
        {clicked === "5" && <Branding />}
      </div>
    </>
  );
}

export default MbWork;
