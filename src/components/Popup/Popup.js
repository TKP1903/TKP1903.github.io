import React, { useState, useEffect } from "react";
import "./Popup.css";
import popup from "./popup image 1.jpeg";
const Popup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  const closePopup = () => {
    setShow(false);
  };
  return (
    <div
      id="popupMain"
      style={{ display: `${show === true ? "block" : "none"}` }}
      onClick={closePopup}
    >
      <div
        id="popup"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={popup} alt="popup" />
        <button id="submitId" onClick={closePopup}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
