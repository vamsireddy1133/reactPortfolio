import React from "react";
import "../App.css";
const services = () => {
  return (
    <div>
      <section class="services" id="services">
        <h2 class="heading">
          My <span>Learnings</span>
        </h2>
        <div class="services-container">
          <div class="service-box">
            <i class="bx bxl-html5"></i>
            <h3>HTML</h3>
            <p>
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It defines the meaning and structure of web content.
            </p>
            <a target="_blank" href="https://html.com/" class="btn">
              Know More
            </a>
          </div>
          <div class="service-box">
            <i class="bx bxl-python"></i>
            <h3>Python</h3>
            <p>
              Python is a high-level, general-purpose programming language. Its
              design philosophy emphasizes code readability with the use of
              significant indentation via the off-side rule.
            </p>
            <a
              target="_blank"
              href="https://docs.python.org/3/tutorial/"
              class="btn"
            >
              Know More
            </a>
          </div>
          <div class="service-box">
            <i class="bx bxl-css3"></i>
            <h3>CSS</h3>
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML.
            </p>
            <a target="_blank" href="https://web.dev/learn/css/" class="btn">
              Know More
            </a>
          </div>
          <div class="service-box">
            <i class="bx bxl-javascript"></i>
            <h3>Javascript</h3>
            <p>
              JavaScript, often abbreviated as JS, is a programming language
              that is one of the core technologies of the World Wide Web,
              alongside HTML and CSS. As of 2023, 98.7% of websites use
              JavaScript.
            </p>
            <a target="_blank" href="https://javascript.info/" class="btn">
              Know More
            </a>
          </div>
          <div class="service-box">
            <i class="bx bxl-php"></i>
            <h3>PHP</h3>
            <p>
              PHP is a general-purpose scripting language geared towards web
              development. It was originally created by Danish-Canadian
              programmer Rasmus Lerdorf in 1993 and released in 1995.
            </p>
            <a
              target="_blank"
              href="https://www.php.net/manual/en/langref.php"
              class="btn"
            >
              Know More
            </a>
          </div>
          <div class="service-box">
            <i class="bx bxl-java"></i>
            <h3>Java</h3>
            <p>
              Java is a high-level, class-based, object-oriented programming
              language that is designed to have as few implementation
              dependencies as possible.
            </p>
            <a
              target="_blank"
              href="https://dev.java/learn/language-basics/"
              class="btn"
            >
              Know More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
