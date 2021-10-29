import "./styles/Services.css";
import { NavLink } from "react-router-dom";

function Services() {
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
                <h1>
                  <span className="link">BRANDING</span>
                </h1>
                <h1>
                  <span className="link">DIGITAL MARKETING</span>
                </h1>
                <h1>
                  <span className="link">DESIGNING</span>
                </h1>
                <h1>
                  <span className="link">SOCIAL MEDIA</span>
                </h1>
                <h1>
                  <span className="link">PHOTOGRAPHY</span>
                </h1>
              </div>
              <div className="col-6 col-lg-8 services__right">
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
        <div className="tabs">
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
