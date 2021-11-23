import "../../../../components/works/styles/Card.css";
// import "pdfjs-dist";

function Card({ pdf, title }) {
  // function displayPdf() {
  //   pdfjsLib.getDocument(pdf).then((doc) => {
  //     doc.getPage(1).then((page) => {
  //       var myCanvas = document.getElementById("my_canvas");
  //       var context = myCanvas.getContext("2d");

  //       var viewport = page.getViewport(1);
  //       myCanvas.width = viewport.width;
  //       myCanvas.height = viewport.height;

  //       page.render({
  //         canvasContext: context,
  //         viewport: viewport,
  //       });
  //     });
  //   });
  // }

  // displayPdf();

  return (
    <>
      <div className="Card">
        <div className="card__content">
          <canvas id="my_canvas" style={{ height: "200px", width: "200px" }} />
        </div>
        <div className="card__title d-flex justify-content-center">
          <h4>
            <a
              target="__blank"
              href={pdf}
              style={{ textDecoration: "none", color: "white" }}
            >
              {title}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
