import { Button } from "react-bootstrap";
import React from "react";
import "./Order.css";
import order from "./Party Order.jpeg";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <section className="order-section">
      <div className="content-online">
        <div className="div-swiggy">
          <div className="div-text">
            <h5>
              Order from <span className="zomato">Zomato</span>
            </h5>
            <Button className="button-zomato">
              <a
                className="link-hotel"
                href="https://www.zomato.com/chennai/atti-square-teynampet"
              >
                Zomato
              </a>
            </Button>
          </div>
        </div>
        <div className="div-swiggy">
          <div className="div-text">
            <h5>
              Order from <span className="swiggy">Swiggy</span>
            </h5>
            <Button className="button-swiggy">
              <a
                className="link-hotel"
                href="https://www.swiggy.com/restaurants/atti-square-old-washermanpet-george-town-chennai-372157"
              >
                Swiggy
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
