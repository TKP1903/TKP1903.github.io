import React, { useEffect, useState } from "react";
import "./Scroll.css";

const Scroll = () => {
  const [show, setShow] = useState(false);

  // var btn = document.getElementById("#button");
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div>
      <a
        id="button"
        className={`${show && "show"}`}
        href="#header-top"
        onClick={() => {
          document.querySelector("html, body").animate({ scrollTop: 0 }, "300");
        }}
      ></a>
    </div>
  );
};

export default Scroll;
