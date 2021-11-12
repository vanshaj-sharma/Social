import BrandLogo from "../../../components/works/BrandLogo";
import "./styles/Branding.css";

function Branding() {
  const goBack = () => {
    let menu = document.querySelector(".menu__deactivate");
    let menuContent = document.querySelector(".menu__content");
    menu.className = "menu";
    menuContent.className += " menu__deactivate";
  };
  return (
    <div className="mb__brand_box">
      <div className="mb__box">
        <h2>Branding</h2>
        <i
          onClick={() => {
            goBack();
          }}
          className=" text-center fas  fa-times"
        ></i>
      </div>
      <div>
        <BrandLogo />
      </div>
    </div>
  );
}
export default Branding;