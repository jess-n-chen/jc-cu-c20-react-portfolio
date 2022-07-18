import React, { useEffect } from "react";
import video from "../assets/images/production ID_5056537.mp4";
import poster from "../assets/images/hero-video-placeholder.png";

function Hero({ currentPage, handlePageChange }) {
  useEffect(() => {
    document.title = "jessica chen | homepage";
  });

  return (
    <section className="hero">
      <video playsinline autoPlay muted loop poster={poster}>
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-cta text-center">
        <h1>jessica chen</h1>
        <p>a developer-in-training based in New York</p>
      </div>
      <div className="hero-button">
        <span
          onClick={() => handlePageChange("Portfolio")}
          className="btn-hero"
        >
          view my projects
        </span>
      </div>
    </section>
  );
}

export default Hero;
