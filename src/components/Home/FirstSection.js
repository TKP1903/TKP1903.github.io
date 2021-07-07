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
          src="https://drive.google.com/uc?export=view&id=1O8cNLY9TvT0QCo5cqlO5nhqSO7SvgJZo"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://drive.google.com/uc?export=view&id=16_0J1_KjnwPxLuKZT3N-_EPBWZC-j9z9"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://drive.google.com/uc?export=view&id=166zysXyxx9Ybbxq2QaaL6a1a_UCCBnCT"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://drive.google.com/uc?export=view&id=1whCTVIrsU6n0txklR2E_KdEUcbkpg1E1"
          alt="Second slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://drive.google.com/uc?export=view&id=1DxWuiukgtFUZECLih4MaO8KhuY748KsH"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default FirstSection;
