import React from "react";
import "../App.css";
import Image from"./images/passportPicture.jpeg";
function About() {
  return (
    <div>
      <section class="about" id="about">
        <div class="about-img">
          <img src={Image} width="500vh" />
        </div>
        <div class="about-content">
          <h2 class="heading">
            About <span>Me</span>
          </h2>
          <h3>Full Stack Developer</h3>
          <p>
            I am passionate about web development technologies and creating
            engaging and user-friendly websites. I have experience in HTML,CSS,
            Javascript, Python, Java, Php. i am always eager to learn new skills
            and tools that are going to revolutianize the tech industry.
          </p>
          <ul>
            <strong>
              <li>Name: j.Vamsi Vardhan Reddy</li>
              <li>Age: 21</li>
              <li>Occupation: Student</li>
              <li>Colloge : AITS, Tirupati</li>
              <li>Technologies working on : MERN STACK</li>
            </strong>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
