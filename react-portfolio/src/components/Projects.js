import React from "react";
import "../App.css";
import card1 from "./images/card-1.jpg";
import card2 from "./images/card-2.jpg";
const projects = () => {
  return (
    <div>
      {" "}
      <section class="portfolio" id="portfolio">
        <h2 class="heading">
          Latest <span>Projects</span>
        </h2>
        <div class="portfolio-container">
          <div class="portfolio-box">
            <img src={card1} />
            <div class="portfolio-layer">
              <h4>
                <span>Web Design</span>
              </h4>
              <p>
                Web design refers to the design of websites that are displayed
                on the internet. It usually refers to the user experience
                aspects of website development rather than software development.
                Web design used to be focused on designing websites for desktop
                browsers.
              </p>
              <a href="#">
                <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div></div>
          <div class="portfolio-box">
            <img src={card2} />
            <div class="portfolio-layer">
              <h4>
                <span>Graphic Design</span>
              </h4>
              <p>
                Graphic design is a craft where professionals create visual
                content to communicate messages. By applying visual hierarchy
                and page layout techniques, designers use typography and
                pictures to meet users' specific needs and focus on the logic of
                displaying elements in interactive designs.
              </p>
              <a href="#">
                <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default projects;
