import React from "react";
import "./Contd.css";
import { Row, Col } from "react-bootstrap";
//import fb from "../Home/images/facebook.png";
//import insta from "../Home/images/instagram.png";
//import youtube from "../Home/images/PngItem_1064507.png";

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
                  Old No 79 , New, no 167, Eldams Rd, Teynampet, Chennai, Tamil
                  Nadu 600018
                  <br />
                  <br />
                  {/* <h2 className="h2-title">ADDRESS2</h2> */}
                  No 722, 558, Thiruvottiyur High Rd, Korukkupet, Old
                  Washermanpet, Chennai, Tamil Nadu 600021
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=133OjlGT9hih0ugXj3svesIQrwVK6FHcE"
              title="google-map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contd;
