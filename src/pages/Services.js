import "./styles/Services.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Services() {
  const [select, setSelected] = useState("1");
  const activate = (index) => {
    let toggler = document.querySelectorAll(".link");
    toggler[index].classList.toggle("link__active");
    for (let i = 0; i < 5; i++) {
      if (i === index) continue;
      toggler[i].classList.remove("link__active");
    }
  };
  return (
    <>
      <div className="desktop">
        <div className="services__box">
          <div className="services__heading">
            <h1>SERVICES</h1>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-4 services__left">
                <h1
                  onClick={() => {
                    setSelected("1");
                    activate(0);
                  }}
                >
                  <span className="link">BRANDING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("2");
                    activate(1);
                  }}
                >
                  <span className="link">DIGITAL MARKETING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("3");
                    activate(2);
                  }}
                >
                  <span className="link">DESIGNING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("4");
                    activate(3);
                  }}
                >
                  <span className="link">SOCIAL MEDIA</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("5");
                    activate(4);
                  }}
                >
                  <span className="link">PHOTOGRAPHY</span>
                </h1>
              </div>
              <div className="col-6 col-lg-8 services__right">
                {select === "1" && <h1>hello1</h1>}
                {select === "2" && <h1>hello2</h1>}
                {select === "3" && <h1>hello3</h1>}
                {select === "4" && <h1>hello4</h1>}
                {select === "5" && <h1>hello5</h1>}
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
          <div></div>
          <NavLink to="/">OUR WORK</NavLink>
          <NavLink to="/">CONTACT US</NavLink>
          <NavLink to="/">ABOUT US</NavLink>
        </div>
      </div>
      <div className="mobile">
        <h1>Mobile Version</h1>
      </div>
    </>
  );
}

export default Services;
