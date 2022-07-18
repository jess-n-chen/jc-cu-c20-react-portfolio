import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light">
        <li className="nav-item">
          <span
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            about me
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            portfolio
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            contact
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            resume
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
