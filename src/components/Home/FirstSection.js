import React from "react";
import "./FirstSection.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Home/images/_hvd1304_1.webp";
import image3 from "../Home/images/_HVD1270_1-min.webp";

import { Button } from "react-bootstrap";
const FirstSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="content">
            <div className="textBox">
              <h2 className="heading-main">
                Taste the Best, Tender, Juicilicious Flavour in Every B!te
              </h2>
              <h4 className="heading-sub">
                One Stop Shop For Your Chicken Cravings
              </h4>

              <Button className="button-first">Read More</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image3}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default FirstSection;
