function DigitalM() {
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
              <h1>Digital Marketing</h1>
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
            Digital Marketing is nothing but marketing on the digital front.
            This involves everything that you see around a brand on the
            internet. We reach out to your audience on all fronts on the
            internet. From their social media feeds, videos they watch on
            YouTube, Pages they like on Facebook. Digital marketing doesn’t just
            involve social media, it’s a lot more.
          </p>
          <ul>
            <li>We get your website up and running</li>
            <li>Strategise and work towards your social media</li>
            <li>
              Advertisements that go on the Social Media platforms including
              Instagram, Facebook, YouTube, Google, Pinterest, LinkedIn, Quora
              etc.
            </li>
            <li>
              Influencer Marketing -- Partnering with Influencers - people with
              a lot of followings on their social media handles - to promote
              your brand
            </li>
            <li>
              Strategizing and planning promotional campaigns to bring more
              awareness to the brand
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DigitalM;
