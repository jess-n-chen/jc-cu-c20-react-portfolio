import React from "react";
import Nav from "./Navigation";

function Header() {
  return (
    <header className="navigation-bar fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            👩‍💻 jc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav />
        </div>
      </nav>
    </header>
  );
}

export default Header;
