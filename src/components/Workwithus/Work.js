import React, { useState } from "react";
import "./Work.css";
import { Row, Col } from "react-bootstrap";
import Modal1 from "./../Modal/Modal1";
import Modal2 from "./../Modal/Modal2";
import Modal3 from "./../Modal/Modal3";
import Modal4 from "./../Modal/Modal4";
const Work = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  var handleModal1 = () => {
    setShow1(true);
  };

  var closeModal1 = () => {
    setShow1(false);
  };
  var handleModal2 = () => {
    setShow2(true);
  };

  var closeModal2 = () => {
    setShow2(false);
  };
  var handleModal3 = () => {
    setShow3(true);
  };

  var closeModal3 = () => {
    setShow3(false);
  };
  var handleModal4 = () => {
    setShow4(true);
  };

  var closeModal4 = () => {
    setShow4(false);
  };

  return (
    <section className="work">
      <div className="work-hero" id="works">
        <h1 className="hero-text page-title">Work With Us</h1>
      </div>

      <div className="job-req">
        <h3>WE ARE LOOKING FOR POTENTIAL CANDIDATES FOR BELOW POSITIONS.</h3>
        <div className="req-cards">
          <Row>
            <Col sm={6}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button className="read-more-btn" onClick={handleModal1}>
                    {" "}
                    Read More
                  </button>
                </p>
                <Modal1 show1={show1} onClose={closeModal1} />
              </div>
            </Col>
            <Col sm={6}>
              <div className="req-card">
                <h4>Shawarma Chef</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button className="read-more-btn" onClick={handleModal2}>
                    Read More
                  </button>
                </p>
                <Modal2 show2={show2} onClose={closeModal2} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="req-card">
                <h4>Operational Manager</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button className="read-more-btn" onClick={handleModal3}>
                    Read More
                  </button>
                </p>
                <Modal3 show3={show3} onClose={closeModal3} />
              </div>
            </Col>
            <Col sm={6}>
              <div className="req-card">
                <h4>Outlet Supervisor</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button className="read-more-btn" onClick={handleModal4}>
                    Read More
                  </button>
                </p>
                <Modal4 show4={show4} onClose={closeModal4} />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="body1">
        <section id="contact">
          <article className="article-section">
            <div className="sectionheader">
              {" "}
              <h1>JOIN US</h1>
            </div>

            <form
              method="POST"
              className="contactform"
              action="https://formsubmit.co/madhumithabaskaran2000@gmail.com"
              enctype="multipart/mixed"
            >
              <input type="hidden" name="_captcha" value="false" />
              <p className="input_wrapper">
                <input
                  type="text"
                  name="Name"
                  id="contact_nom"
                  placeholder="Name"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_email"
                  id="contact_email"
                  placeholder="Email"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_No"
                  id="contact_sujet"
                  placeholder="Phone No"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="city"
                  id="contact_sujet"
                  placeholder="City"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="Position"
                  id="contact_sujet"
                  placeholder="Position"
                  required
                />
              </p>
              <br />
              <p className="input_wrapper">
              <input type="file" name="attachment" accept=".pdf,.doc,.zip" />
              </p>
              <p className="textarea_wrapper">
                <textarea
                  name="contact_message"
                  id="contact_message"
                  placeholder="Message"
                  required
                ></textarea>
              </p>

              <p>
                <input type="submit" className="but" />
              </p>
            </form>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Work;
