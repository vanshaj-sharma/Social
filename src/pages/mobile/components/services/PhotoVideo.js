function PhotoVideo() {
  const goBack = () => {
    let menu = document.querySelector(".menu__deactivate");
    let menuContent = document.querySelector(".menu__content");
    menu.className = "menu";
    menuContent.className += " menu__deactivate";
  };
  return (
    <>
      <div className="brand__box">
        <h1 className="s_title">SERVICES</h1>
        <div className="s_brand">
          <div className="row">
            <div className="col-11">
              <h1>Photo and Video </h1>
            </div>
            <div className="col-1">
              <i
                onClick={() => {
                  goBack();
                }}
                className="pl-5 text-center fas  fa-times"
              ></i>
            </div>
          </div>
          <p>
            Photography is an art of capturing the what we see on to a film/
            digital reel. It’s not just pointing the camera at something and
            pressing that button. It takes years to learn and even more to get
            great at it and we have been doing it for even more. We mainly excel
            in Commercial Photo and Video shoots so we can show your customers
            what your brand stands for. What’s that story behind every product
            of your brand that makes it stand out in the market, so they’re not
            just buying your products but their stories along with it. Here are
            things that we do:
          </p>
          <ul>
            <li>Campaign Shoots</li>
            <li>Organising the campaigns</li>
            <li>Concept shoots</li>
            <li>E-Commerce Photoshoots</li>
            <li>Music Videos</li>
            <li>Reels </li>
            <li>Youtube Videos </li>
            <li>Interviews </li>
            <li>Podcasts </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default PhotoVideo;
