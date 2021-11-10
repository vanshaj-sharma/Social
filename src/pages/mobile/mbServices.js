import { NavLink } from "react-router-dom";
import "./styles/mbServices.css";

function mbServices() {
  return (
    <>
      <h1 className="s_title">SERVICES</h1>
      <div className="s_headings">
        <NavLink to="/services/branding">BRANDING</NavLink>
        <NavLink to="/services/influential">INFLUENTIAL MARKETING</NavLink>
        <NavLink to="/services/design">DESIGNING</NavLink>
        <NavLink to="/services/marketing">SOCIAL MARKETING</NavLink>
        <NavLink to="/services/photography">PHOTOGRAPHY</NavLink>
      </div>
    </>
  );
}

export default mbServices;
