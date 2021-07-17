import "./Modal_F.scss";
import { Row, Col } from "react-bootstrap";

const Modal_F = () => {
  return (
    <div>
      <div class="franchise__modal--content">
        <Row>
          {/* <!-- card --> */}
          <Col>
            <div class="franchise__modal--card">
              <div class="franchise__modal--icon">
                <img
                  src="https://drive.google.com/uc?export=view&id=1dv-_7l7Gi7RB7jdp3ziBuG8fdiUjShVb"
                  alt="Stand Alone QSR"
                />
              </div>
              <p class="franchise__modal--title">Stand alone QSR</p>
              <p class="franchise__modal--title">Area - Above 200 sq.ft </p>
            </div>
          </Col>
          {/* <!-- end card --> */}
          {/* <!-- card --> */}

          {/* <!-- card --> */}
          <Col>
            <div class="franchise__modal--card">
              <div class="franchise__modal--icon">
                <img
                  src="https://drive.google.com/uc?export=view&id=1G2jJaGzTlPYDnBvJpDzFoy-87PK56yFL"
                  alt="kiosk"
                />
              </div>
              <p class="franchise__modal--title">Kiosk</p>
              <p class="franchise__modal--title">Area - 70 to 120 sq.ft </p>
            </div>
          </Col>
          {/* <!-- end card --> */}
        </Row>
      </div>
    </div>
  );
};

export default Modal_F;
