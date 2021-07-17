import React from "react";
import img1 from "./Image1.png";
import "./About1.css";
const About1 = () => {
  return (
    <div className="parent">
      <div className="parent--title">
        <h1 className="parent-title page-title">About Us</h1>
      </div>
      <div className="parent1">
        <div className="child-content">
          <h2 className="about1-title">Who We Are</h2>
          <p className="about1-content">
            The story of Atti Square begins as a result of an unbridled passion
            to serve high-quality scrumptious Shawarmas with an exceptionally
            delicious taste and proper hygiene at an affordable cost.
            <br />
            <br />
            Shawarma is the easy-to-go snack of modern times, especially in
            today's globalized world. Originated in Lebanon, this savory dish
            has made its way into many countries including India.
            <br />
            <br />
            We at Atti Square aspire to make our customers enjoy our Shawarmas
            as the best that they have ever had and earn their loyalty by
            providing them utmost satisfaction. We equally aim to evolve into a
            reputed brand that is loved by every Indian and become a household
            name.
            <br />
            <br />
            <span>
              {" "}
              We were also the first to launch the authentic ‘Rumali's shawarma’
              in the market.
            </span>
            <br />
          </p>
        </div>
        <div className="child-img">
          <img
            id="side-image1"
            src={img1}
            alt=""
          />
        </div>
      </div>
      <div className="parent2">
        <div className="text-about">
          <div className="content-para">
            <h2 className="about1-title why">Why we Stand Apart</h2>
            <p className="why-para">
              We were the first to serve Shawarmas in Chennai at an affordable
              cost of just Rs.49 with a complimentary juice. This captured the
              interest of lots of people. In the beginning, they thought it was
              just a promotional offer that would only last a few weeks. But
              Atti Square stood by its promise and surprised the people by
              continuing the program to date. By this maneuver, Atti Square
              earned the respect of the people and became an instant favorite.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="parent3">
        <div className="child-img">
          <img
            id="side-image2"
            src="https://attisquare.s3.amazonaws.com/atti-images/atti-14.webp"
            alt=""
          />
        </div>
        <div className="child2-content">
          <h2 className="about2-title">How We Do It</h2>

          <p className="about2-content">
            Our distinguishing feature is that we believe in standing true to
            our word with professional integrity as we strive to provide our
            customers with Shawarmas having unique ingredients, authentic
            cultural connection, and at a reasonable price without compromising
            on quality and hygiene.
            <br />
            <br />
            <span>"Keep Calm and Enjoy our Shawarma"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
