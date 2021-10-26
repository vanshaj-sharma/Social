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
          <div className="social__tabs">
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/">OUR WORK</NavLink>
            <NavLink style={{ color: "black" }} to="/">
              CONTACT US
            </NavLink>
            <NavLink style={{ color: "black" }} to="/">
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mobile">
        <h1>Mobile Version</h1>
      </div>
    </>
  );
}

export default Home;
