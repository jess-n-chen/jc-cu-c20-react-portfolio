import React from "react";

function Footer() {
  return (
    <section id="contact-me" className="section-primary">
      <div className="section-title-primary">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container">
        <div className="contact-icons">
          <p>
            Github:
            <a
              href="https://github.com/jess-n-chen"
              target="_blank"
              rel="noreferrer"
              title="Github Link"
            >
              <i className="fab fa-github"></i>
            </a>
          </p>
        </div>
        <div className="contact-icons">
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/jessica-chen-pmp-a37208122/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </p>
        </div>
        <div className="contact-icons">
          <p>
            Email:
            <a href="mailto:jessicachen28@gmail.com" title="Email Link">
              <i className="fas fa-paper-plane"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
