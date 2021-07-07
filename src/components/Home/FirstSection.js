import React from "react";
import "./FirstSection.css";
import Carousel from "react-bootstrap/Carousel";

import { Button } from "react-bootstrap";
const FirstSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://attisquare.s3.amazonaws.com/atti-images/atti-27.webp"
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
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://attisquare.s3.amazonaws.com/atti-images/atti-21.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://attisquare.s3.amazonaws.com/atti-images/atti-22.webp"
          alt="Second slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://attisquare.s3.amazonaws.com/atti-images/atti-23.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default FirstSection;
