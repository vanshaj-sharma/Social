import "./styles/Work.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Work() {
  const [select, setSelected] = useState("0");
  const activate = (index) => {
    let toggler = document.querySelectorAll(".link");
    toggler[index].classList.toggle("link__active");
    for (let i = 0; i < 7; i++) {
      if (i === index) continue;
      toggler[i].classList.remove("link__active");
    }
  };
  useEffect(() => {
    activate(0);
  }, []);
  return (
    <>
      <div className="desktop">
        <div className="work__box">
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-6 work__heading">
              <h1>OUR WORK</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-4 work__left">
                <h1
                  onClick={() => {
                    setSelected("0");
                    activate(0);
                  }}
                >
                  <span className="link">BRAND LOGOs</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("1");
                    activate(1);
                  }}
                >
                  <span className="link">PHOTOGRAPHY</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("2");
                    activate(2);
                  }}
                >
                  <span className="link">VIDEOGRAPHY</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("3");
                    activate(3);
                  }}
                >
                  <span className="link">PHOTO EDITING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("4");
                    activate(4);
                  }}
                >
                  <span className="link">VIDEO EDITING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("5");
                    activate(5);
                  }}
                >
                  <span className="link">BRAND STRATEGY</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("6");
                    activate(6);
                  }}
                >
                  <span className="link">SOCIAL MEDIA</span>
                </h1>
              </div>
              <div className="col-6 col-lg-8 work__right">
                {select === "0" && <h1>hello1</h1>}
                {select === "1" && <h1>hello2</h1>}
                {select === "2" && <h1>hello3</h1>}
                {select === "3" && <h1>hello4</h1>}
                {select === "4" && <h1>hello5</h1>}
                {select === "5" && <h1>hello6</h1>}
                {select === "6" && <h1>hello7</h1>}

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam autem nam fuga, labore culpa molestias unde pariatur
                  similique itaque asperiores praesentium expedita eligendi non.
                  Magnam odio vel perferendis! Voluptate, veniam. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Saepe error
                  accusamus possimus porro in consequatur dicta doloribus quae
                  ratione soluta, dolores numquam expedita aut esse ipsam ut
                  perspiciatis non totam.
                </p>
                <ul>
                  <li>Logo</li>
                  <li>Logo</li>
                  <li>Logo</li>
                  <li>Logo</li>
                  <li>Logo</li>
                  <li>Logo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs" style={{ animation: "transitionUp 0.9s" }}>
          <NavLink to="/services">SERVICES</NavLink>
          <div></div>
          <NavLink to="/contact">CONTACT US</NavLink>
          <NavLink to="/">ABOUT US</NavLink>
        </div>
      </div>
      <div className="mobile">
        <h1>Mobile Version</h1>
      </div>
    </>
  );
}

export default Work;
