import React, { useEffect } from "react";
import image from "../assets/images/IMG_0519.png";

function About() {
  useEffect(() => {
    document.title = "jessica chen | about me";
  });

  return (
    <section id="about-me" className="section-primary">
      <div className="section-title-primary">
        <h2>About Me</h2>
      </div>
      <div className="about-container flex-container">
        <div className="about-image">
          <img
            src={image}
            alt="Developer"
            className="about-picture img-fluid"
          />
        </div>
        <div className="about-text">
          <p>
            Hi! I'm Jessica 👋 I have a passion for learning new skills and am
            currently utilizing that passion to learn full-stack development
            through Columbia's bootcamp.
          </p>
          <br />
          <p>
            I also have front-end development experience through SheCodes in
            HTML, CSS, and Javascript. I have integrated with APIs and worked
            with React & Bootstrap Libraries.
          </p>
          <br />
          <p>
            During the day, I help customers integrate their content management
            systems with Smartling as a Solutions Architect!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
