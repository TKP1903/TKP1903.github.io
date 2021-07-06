import React from "react";
import "./Faqform.scss";

const Faqform = () => {
  return (
    <div class="wrapper">
      <form action="https://formsubmit.co/madhubas2k@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <h2 className="page-title">OWN A FRANCHISE</h2>
        <h5>ENTER YOUR REQUEST FOR INITIAL MEETING</h5>
        <hr className="sep" />
        <div className="group">
          <input type="text" required="required" name="name" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="text" required="required" name="number" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Contact No.</label>
        </div>
        <div className="group">
          <input type="text" required="required" name="Email" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <select>
            <option disabled selected>
              Investment Range
            </option>
            <option value="10-20 Lakh">10-20 Lakh</option>
            <option value="20-30 Lakh">20-30 Lakh</option>
          </select>
          <span className="highlight"></span>
          <span className="bar"></span>
          {/*<label>Investestment Range</label> */}
        </div>
        <div className="group">
          <textarea
            type="textarea"
            rows="5"
            required="required"
            name="Message"
          ></textarea>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Message</label>
        </div>
        <div className="btn-box">
          <button className="btn btn-submit" type="submit">
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Faqform;
