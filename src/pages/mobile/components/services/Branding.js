import "./styles/Branding.css";
function Branding() {
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
            <div className="col-6">
              <h1>Branding</h1>
            </div>
            <div className="col-6">
              <i
                onClick={() => {
                  goBack();
                }}
                className="pl-5 text-center fas  fa-times"
              ></i>
            </div>
          </div>
          <p>
            Branding is something that defines your brand and lets your
            customers realise what you stand for. This doesn’t just include
            making Logos, this involves making a strategy about what to say and
            how to say it to your audience so they not only can see what you’re
            offering but why you’re doing what you’re doing. This involves:
          </p>
          <ul>
            <li>Logo</li>
            <li>Packings</li>
            <li>
              Brand Strategy -- How to strategise your brand to strengthen the
              vision behind your brand in eyes of your audience
            </li>
            <li>
              Messaging -- What you say to your audience across different
              platforms
            </li>
            <li>Brand Kit</li>
            <li>Market Analysis and Evaluation</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Branding;
