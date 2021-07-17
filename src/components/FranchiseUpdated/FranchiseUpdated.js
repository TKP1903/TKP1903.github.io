import React, { useState } from "react";
import "./FranchiseUpdated.css";
import { GiPuzzle } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { GrSystem } from "react-icons/gr";
import { GiGrowth } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiBreakingChain } from "react-icons/gi";
import { Row, Col } from "react-bootstrap";
import Process from "./Process/Process";
import Modal_F from "./Franchise_modal/Modal_F";
import "./Franchise.scss";
const FranchiseUpdated = () => {
  const [active, setActive] = useState("home");

  return (
    <section className="franchise-u">
      <div>
        <div className="row">
          <div className="board">
            <div className="page--title">
              <h2 className="pag page-title">Franchise</h2>
            </div>
            <div className="board-inner">
              <ul className="nav nav-tabs" id="myTab">
                <div className="liner"></div>
                <li className={` ${active === "home" ? "active" : " "}`}>
                  <a
                    className="tab-click"
                    data-toggle="tab"
                    onClick={() => setActive("home")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">Profile</span>
                      <span className="round-tabs one">
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                  </a>
                </li>

                <li className={active === "profile" ? "active" : " "}>
                  <a
                    className="tab-click"
                    data-toggle="tab"
                    title="profile"
                    onClick={() => setActive("profile")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">What we do</span>

                      <span className="round-tabs two">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/50/000000/we.png"
                        />{" "}
                      </span>
                    </div>
                  </a>
                </li>
                <li className={active === "messages" ? "active" : " "}>
                  <a
                    className="tab-click"
                    data-toggle="tab"
                    onClick={() => setActive("messages")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">Benefits</span>
                      <span className="round-tabs three">
                        <img
                          className="icon"
                          src="https://img.icons8.com/wired/64/000000/get-cash.png"
                        />{" "}
                      </span>{" "}
                    </div>
                  </a>
                </li>

                <li className={active === "settings" ? "active" : " "}>
                  <a
                    className="tab-click"
                    data-toggle="tab"
                    onClick={() => setActive("settings")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">Process</span>
                      <span className="round-tabs four">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/50/000000/escrow-process.png"
                        />{" "}
                      </span>
                    </div>
                  </a>
                </li>

                <li className={active === "doner" ? "active" : " "}>
                  <a
                    className="tab-click"
                    data-toggle="tab"
                    title="Franchise Model"
                    onClick={() => setActive("doner")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">Model</span>
                      <span className="round-tabs five">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/48/000000/cottage--v1.png"
                        />{" "}
                      </span>{" "}
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div
                className={
                  "tab-pane fade" + (active === "home" ? "in active" : " ")
                }
                id="home"
              >
                <h3 className="head text-center fran_head">
                  Franchise Profile Requirements{" "}
                </h3>
                <p className="narrow text-center">
                  <div className="fran_para">
                    Atti Square believes in providing excellent business
                    opportunities to entrepreneurs through franchises. We expect
                    them to have the following criteria.
                  </div>
                  <br />
                  <br />
                  <p className="points">
                    <Row>
                      <Col lg={6} className="madhubas">
                        <GiPuzzle size={50} />
                        <br />
                        1. Strong commitment and relentless determination to
                        succeed.
                        <br />
                      </Col>

                      <br />
                      <Col sm={12} lg={6} className="madhubas">
                        <GrStatusGood size={50} className="white-icons" />
                        <br />
                        2. Share our mission and vision, and be innovative.
                        <br />
                      </Col>
                      <Col sm={12} lg={6} className="madhubas">
                        <GiGrowth size={50} />
                        <br />
                        3. Professional standards - Integrity, Effort, and
                        Enthusiasm.
                        <br />
                      </Col>
                      <Col sm={12} lg={6} className="madhubas">
                        <GrSystem size={50} className="white-icons" />
                        <br />
                        4. Skills - Interpersonal, business, communication, and
                        customer care.
                        <br />
                      </Col>
                      <Col sm={12} lg={6} className="madhubas">
                        <GiBreakingChain size={50} />
                        <br />
                        5. Flexibility and Maturity .
                        <br />
                        <br />
                      </Col>

                      <Col sm={12} lg={6} className="madhubas">
                        <GiReceiveMoney size={50} />
                        <br />
                        6. Financial stability and dedication to growth .
                        <br />
                      </Col>
                    </Row>
                  </p>
                </p>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "profile" ? "in active" : " ")
                }
                id="profile"
              >
                <h3 className="head text-center fran_head">What We Do</h3>
                <div className="what">
                  <div class="container5">
                    <div class="list5">
                      <Row>
                        <Col sm={12}>
                          <div class="num">
                            <h3>
                              Proper planning and execution is prioritized
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Store design and the interior layout is thoroughly
                              planned
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              On-site training and full operational support are
                              delivered
                            </h3>
                          </div>

                          <div class="num">
                            <h3>
                              Logistics and supply-chain are well established
                            </h3>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div class="num">
                            <h3>
                              Vendor Management and Inventory management are
                              provided
                            </h3>
                          </div>

                          <div class="num">
                            <h3>
                              Menu is organized and designed taking pricing into
                              account
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Marketing Plan is arranged for promotion and
                              advertisements
                            </h3>
                          </div>
                          <div class="num">
                            <h3>Daily reporting facility is allocated</h3>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "messages" ? "in active" : " ")
                }
                id="messages"
              >
                <h3 className="head text-center fran_head">
                  Franchise Benefits
                </h3>
                <div class="list-type2">
                  <ol>
                    <div className="lis-row">
                      <div className="lis-col">
                        <li>
                          <a href="#">Powerful Brand Association</a>
                        </li>
                        <li>
                          <a href="#">A to Z Product Supply</a>
                        </li>
                        <li>
                          <a href="#">Manpower Guarantee</a>
                        </li>
                        <li>
                          <a href="#">Advertising and Marketing Programs</a>
                        </li>
                        <li>
                          <a href="#">Not dependent on Skilled labor</a>
                        </li>
                        <li>
                          <a href="#">
                            Centralized Supply – Uniform Taste and Quality
                          </a>
                        </li>
                      </div>

                      <div className="lis-col">
                        <li>
                          <a href="#">New Products & Development</a>
                        </li>
                        <li>
                          <a href="#">
                            Site Selection & Development Assistance
                          </a>
                        </li>
                        <li>
                          <a href="#">Operational & Management Support</a>
                        </li>
                        <li>
                          <a href="#">Low investment; High Margins</a>
                        </li>
                        <li>
                          <a href="#">Accounts & Control System</a>
                        </li>
                      </div>
                    </div>
                  </ol>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "settings" ? "in active" : " ")
                }
                id="settings"
              >
                <h3 className="head text-center">Process</h3>
                <Process />
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "doner" ? "in active" : " ")
                }
                id="settings"
              >
                <h3 className="head text-center">Model</h3>
                <Modal_F />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseUpdated;
