import "./styles/Services.css";
import { NavLink } from "react-router-dom";
import arrow from "./assets/arrow.png";

function Services() {
  return (
    <>
      <div className="desktop">
        <div className="services__box">
          <div className="services__heading">
            <h1>SERVICES</h1>
          </div>
          <div className="services__content">
            <div className="left">
              <div></div>
              <div>
                <h1>BRANDING</h1>
                <img style={{ paddingLeft: "12px" }} src={arrow} alt="" />
              </div>
              <div>
                <h1>DIGITAL MARKETING</h1>
              </div>
              <div>
                <h1>DESIGNING</h1>
              </div>
              <div>
                <h1>SOCIAL MEDIA</h1>
              </div>
              <div>
                <h1>PHOTOGRAPHY</h1>
              </div>
            </div>
            <div className="right">
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
            </div>
          </div>
          <div className="social__tabs">
            <div></div>
            <NavLink to="/">OUR WORK</NavLink>
            <NavLink to="/">CONTACT US</NavLink>
            <NavLink to="/">ABOUT US</NavLink>
          </div>
        </div>
      </div>
      <div className="mobile">
        <h1>Mobile Version</h1>
      </div>
    </>
  );
}

export default Services;
