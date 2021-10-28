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
                <h1 className="link">BRANDING</h1>
                <img
                  style={{
                    height: "20px",
                    width: "220px",
                  }}
                  src={arrow}
                  alt=""
                />
              </div>
              <div>
                <h1 className="link">DIGITAL MARKETING</h1>
              </div>
              <div>
                <h1 className="link">DESIGNING</h1>
              </div>
              <div>
                <h1 className="link">SOCIAL MEDIA</h1>
              </div>
              <div>
                <h1 className="link">PHOTOGRAPHY</h1>
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
              <li>Logo</li>
              <li>Logo</li>
              <li>Logo</li>
              <li>Logo</li>
              <li>Logo</li>
              <li>Logo</li>
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
