import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  useEffect(() => {
    document.title = "jessica chen | contact";
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  return (
    <section className="contact-section">
      <div className="secondary-section">
        <div className="section-title-secondary">
          <h2>Contact Me</h2>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              name="Name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              type="email"
              name="Email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              name="Message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
