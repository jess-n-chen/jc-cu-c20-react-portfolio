import React from "react";

function Nav() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light">
        <li className="nav-item">
          <span className="nav-link">about me</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">portfolio</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">contact</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">resume</span>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
