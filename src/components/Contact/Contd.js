import React from "react";
import "./Contd.css";
import { Row, Col } from "react-bootstrap";

const Contd = () => {
  return (
    <div className="cont-bg">
      <Row className="cont">
        <Col md={6}>
          <div id="con-card">
            <div className="directors">
              <h2 className="h2-title page-title">Contact Us</h2>
              <div className="address">
                <h2 className="h2-title">ADDRESS</h2>

                <p className="contact-content">
                 <span className="addd">Corporate: </span> Old No 79 , New, no 167, Eldams Rd, Teynampet, Chennai, Tamil
                  Nadu 600018
                  <br />
                  <br />
                  {/* <h2 className="h2-title">ADDRESS2</h2> */}
                  <span className="addd"> Old Washermanpet: </span> No 722, 558, Thiruvottiyur High Rd, Korukkupet, Old
                  Washermanpet, Chennai, Tamil Nadu 600021
                  <br />
                  <br />
                  <span className="addd">Pallavaram: </span>No 135, Mosque St, near Inayath Mahal, Pallavaram, Chennai,
                  Tamil Nadu 600043
                  <br />
                  <br />
                  <span className="addd">Palavakkam: </span> 1/178, East coast road,Palavakkam, East Coast Rd, Before, Anna
                  Salai, signal, Chennai, Tamil Nadu 600041
                  <br />
                  <br />
                  <span className="addd">Velachery: </span>No 1, Velachery Rd, Vijaya Nagar, Velachery, Chennai, Tamil
                  Nadu 600042
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1ZLUIk5G3B5RH7OF4_bCt-hqAjPPTW4Pc&hl=en"
              title="google-map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contd;
