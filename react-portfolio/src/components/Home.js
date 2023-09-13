import React from "react";
import "../App.css";
import bannerImage from "./images/bannerimage.jpg";
function Home() {
  return (
    <div>
      <section class="home" id="home">
        <div class="home-content">
          <h3>
            Hello, It's <span>Me</span>
          </h3>
          <h1>Vamsi Reddy</h1>
          <h3>
            And I'm a <span class="multiple-text">Full Stack Developer</span>
          </h3>
          <p>
            Hello everyone, Welcome to my Portfolio. This is my first Portfolio
            website so dive into my portfolio and my details.
          </p>
          <div class="social-media">
            <a
              href="https://www.instagram.com/i_am_vamsi1/"
              className="link-underline-opacity-0"
            >
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a target="_blank" href="https://twitter.com/vamsireddy1133">
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vamsireddy1133/"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/vamsireddy1133">
              <i class="bx bxl-github"></i>
            </a>
          </div>
          <a href="#" class="btn">
            Subscribe
          </a>
        </div>
        <div class="home-img">
          <img src={bannerImage} width="750vh" />
        </div>
      </section>
    </div>
  );
}

export default Home;
