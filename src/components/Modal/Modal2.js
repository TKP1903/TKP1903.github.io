import React from "react";
import "./Modal.css";

const Modal2 = (props) => {
  if (!props.show2) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Shawarma Chef</h4>
        </div>
        <div className="modal-body">
          <p>
            Experience: More than 1-year experience in Café/Hotel industry
            <br />
            • Prepare or serve hot or cold beverages, such as tea, coffee,
            espresso drinks, blended coffees etc.
            <br />
            • Clean or sanitize work areas, utensils, or equipment.
            <br />
            • Clean service or seating areas.
            <br />
            • Adhere to Food Safety/sanitation policies and procedures
            established by the company.
            <br />
            • Receive and process customer payments.
            <br />
            • Stock customer service stations with paper products or beverage
            preparation items.
            <br />
          </p>
        </div>
        <div className="modal-footer">
          <a href="#contact" onClick={props.onClose} className="apply">
            Apply
          </a>
          <a onClick={props.onClose} className="close-btn">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
