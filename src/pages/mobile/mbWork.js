import { useState } from "react";
import Branding from "./components/work/Branding.js";
import BrandStrategy from "./components/work/BrandStrategy";
import PhotoEditing from "./components/work/PhotoEditing";
import Photography from "./components/work/Photography";
import SocialMedia from "./components/work/SocialMedia";
import VideoEditing from "./components/work/VideoEditing";
import Videography from "./components/work/Videography";

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
      <h1 className="s_title" style={{ animation: "animate__work ease-in 1s" }}>
        OUR WORK
      </h1>

      <div className="menu" style={{ animation: "animate__work ease-in 1s" }}>
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
        {clicked === "1" && <Photography />}
        {clicked === "2" && <Videography />}
        {clicked === "3" && <PhotoEditing />}
        {clicked === "4" && <VideoEditing />}
        {clicked === "5" && <BrandStrategy />}
        {clicked === "6" && <SocialMedia />}
      </div>
    </>
  );
}

export default MbWork;
