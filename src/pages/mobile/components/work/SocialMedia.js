function SocialMedia() {
  const goBack = () => {
    let menu = document.querySelector(".menu__deactivate");
    let menuContent = document.querySelector(".menu__content");
    menu.className = "menu";
    menuContent.className += " menu__deactivate";
  };
  return (
    <div className="mb__brand_box">
      <div className="mb__box">
        <h2>SocialMedia Under Construction</h2>
        <i
          onClick={() => {
            goBack();
          }}
          className=" text-center fas  fa-times"
        ></i>
      </div>
    </div>
  );
}
export default SocialMedia;
