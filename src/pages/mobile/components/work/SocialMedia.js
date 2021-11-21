function SocialMedia({ set, option }) {
  const goBack = () => {
    let work__head = document.querySelectorAll(".work__head");
    work__head[option].classList.remove("heading__deactivate");
    set("");
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
