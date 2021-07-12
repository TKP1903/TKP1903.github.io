import React, { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  //   const items = document.querySelectorAll(".accordion button");

  const [toggle, setToggle] = useState({
    toggle1: true,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    toggle5: false,
    toggle6: false,
    toggle7: false,
  });

  return (
    <div className="faqacc">
      <div class="container-faq">
        <h2 className="faq-title page-title">FREQUENTLY ASKED QUESTIONS</h2>
        <hr className="sep" />{" "}
        <div class="accordion">
          <div class="accordion-item">
            <button
              id="accordion-button-1"
              aria-expanded={toggle["toggle1"]}
              onClick={() =>
                toggle.toggle1 === false
                  ? setToggle({
                      ...toggle,
                      toggle1: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle1: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                1. WHAT IS ATTI SQUARE'S FRANCHISE?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                At Atti Square,Our Prime aim is to treat the customers of all
                category, Our Menu is designed meticulously in order to give the
                best price. All our menu has been priced Pocket friendly. Atti
                Square is an unique and innovative quick service restaurant
                concept that brings the Lebanese traditional Shawarma to the
                modern day lifestyle in genuine and tasty way.
              </p>
              <p>
                Atti Square Shawarma offers a variety of choices and ability to
                customize high-end quality Shawarma.
              </p>
              <p>
                It’s success is due to many factors including cleanliness,
                authenticity, consistency and modernity in quality and service.
                Atti Square targets food conscious customers who are looking for
                the taste, healthiness, quality and value of their meal.
              </p>
              <p>
                Atti Square objective is to expand nationally and globally while
                preserving its originality and quality and to achieve optimal
                return on investment and value growth in the industry.
              </p>
              <p>
                The size of a typical Atti Square is between 100 sqft to 500
                sqft with a footfall of 150 to 300 customers per day.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-2"
              aria-expanded={toggle["toggle2"]}
              onClick={() =>
                toggle.toggle2 === false
                  ? setToggle({
                      ...toggle,
                      toggle2: true,
                      toggle1: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle2: false,
                      toggle1: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                2. HOW MUCH DOES THE FRANCHISE COST?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Franchise fee structure may vary according to the Prototype
                chosen. One of our Franchise expert will assist you with all
                informations during the initial meeting. Please send your
                enquiry to franchise@attisquare.com.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-3"
              aria-expanded={toggle["toggle3"]}
              onClick={() =>
                toggle.toggle3 === false
                  ? setToggle({
                      ...toggle,
                      toggle3: true,
                      toggle2: false,
                      toggle1: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle3: false,
                      toggle2: false,
                      toggle1: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                3. HOW MUCH IS THE FEE FOR CONTINUING SUPPORT SERVICES “ROYALTY
                FEE”?{" "}
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The continuing services, or “royalty fee,” is 6% of your gross
                sales and is paid monthly. This fee entitles you to use the Atti
                Square service mark, use of distinctive system, marketing
                assistance, ongoing business development and counseling, and
                other benefits that come with being an Atti Square franchisee.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-4"
              aria-expanded={toggle["toggle4"]}
              onClick={() =>
                toggle.toggle4 === false
                  ? setToggle({
                      ...toggle,
                      toggle4: true,
                      toggle2: false,
                      toggle3: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle4: false,
                      toggle2: false,
                      toggle3: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                4. HOW TO CONTACT ATTI SQUARE BRAND FOR FRANCHISE?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                You can contact them through email – franchise@attisquare.com or
                call them at +91-
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle5"]}
              onClick={() =>
                toggle.toggle5 === false
                  ? setToggle({
                      ...toggle,
                      toggle5: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                5. WHAT IS THE DIFFERENCE BETWEEN ATTI SQUARE AND OTHER SHAWARMA
                SHOP?{" "}
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Atti Square has unique flavors of shawarma priced at nominal
                range.Atti Square offers complimentary drinks with all its
                shawarma.
              </p>
              <p>
                Atti Square is the first in Chennai to introduce Rumali
                Shawarmaa{" "}
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle6"]}
              onClick={() =>
                toggle.toggle6 === false
                  ? setToggle({
                      ...toggle,
                      toggle6: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle5: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                6. WHAT ARE THE SUPPORT SYSTEMS PROVIDED BY ATTI SQUARE ?{" "}
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                In addition to field support, members of Atti Square
                organization will provide the services listed below:
              </p>
              <ul>
                <li>
                  Operational Support - Atti Square Management will provide
                  ongoing training and support in many areas critical to the
                  success of the franchise's business, including unit operations
                  operations mtce, customer-service techniques, product product
                  d suggested pricing guidelines, and adminis
                  administrativetrative
                </li>
                <li>
                  Site Selection - Prior to approving a site for Atti Square
                  outlet, Atti Square Management will provide franchisees with
                  clear guidelines for a suitable location. Atti Square will
                  require franchisees to follow these instructions to ensure
                  that an appropriate site is located.
                </li>
                <li>
                  Marketing Support - Atti Square Management coordinates
                  development of advertising materials and strategies for the
                  benefit of all members of the franchise network.{" "}
                </li>
                <li>
                  Accounting/Audit/Legal - Reporting directly to administration,
                  administration, ps responsible for the financial and l
                  financial and legal fisees.
                </li>
                <li>
                  Ongoing Research and Development - Atti Square Management
                  continues to research methods and techniques for franchise
                  operations that enhance unit-level profitability.{" "}
                </li>
                <li>
                  Overall Program Oversight - Atti Square Management provides
                  the overall coordination and planning for the Atti Square
                  franchise system.
                </li>
              </ul>
              <p>
                Manpower Guarantee – Atti Square in a way unique promises on the
                Man power.It assures to provide manpower in all the situations
                no matter what.N number of Manpower shall be provided during the
                Agreed period.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle7"]}
              onClick={() =>
                toggle.toggle7 === false
                  ? setToggle({
                      ...toggle,
                      toggle7: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle7: false,
                      toggle6: false,
                    })
              }
            >
              <span class="accordion-title">7. WHAT IS MY NEXT STEP?</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Simply complete the Franchise Application Form and return it to
                us. Upon receiving the form we will contact you. If you have any
                questions, in the meantime, please feel free to call us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
