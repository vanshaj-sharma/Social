import Card from "./Card.js";
function BrandLogo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandLogo;
