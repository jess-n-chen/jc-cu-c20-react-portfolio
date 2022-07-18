import React from "react";
import resume from "../assets/docs/Jessica_Chen-Resume_2022.pdf";

function Resume() {
  return (
    <section id="resume-section" className="section-primary">
      <div className="section-title-primary">
        <h2>Resume</h2>
      </div>
      <div className="resume-container flex-container">
        <div className="resume-text">
          <p>
            Download my{" "}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              title="Resume PDF Link"
            >
              resume
            </a>
          </p>
          <p>Front-End Proficiencies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Foundations</li>
          </ul>
          <br />
          <p>Back-End Proficiencies</p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
