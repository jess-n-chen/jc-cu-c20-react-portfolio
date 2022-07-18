import React from "react";
import Nav from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="navigation-bar fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand"
            onClick={() => handlePageChange("Home")}
          >
            👩‍💻 jc
          </span>
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
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
