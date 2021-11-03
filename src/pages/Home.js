import "./styles/Home.css";
import Logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="desktop">
        <div className="social__box">
          <div className="social__content">
            <img src={Logo} alt="Social logo" />
          </div>
          <div className="tabs">
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/work">OUR WORK</NavLink>
            <NavLink style={{ color: "black" }} to="/contact">
              CONTACT US
            </NavLink>
            <NavLink style={{ color: "black" }} to="/about">
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mobile">
        <h1>Mobile Version</h1>
        <button className="btn btn-outline-danger">Hello</button>
      </div>
    </>
  );
}

export default Home;
