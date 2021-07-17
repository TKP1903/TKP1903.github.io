import "./Appcon.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Faqform from "./Faqform/Faqform";
import Faq from "./FAQ/Faq";
function Contact() {
  return (
    <div className="faq">
      <Row>
        <Col md={6} sm={10} lg={4} className="faqform">
          <Faqform />
        </Col>
        <Col md={6} sm={10} lg={4} className="faqaccordian">
          <Faq />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
