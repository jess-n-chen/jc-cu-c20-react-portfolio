import React from "react";
import video from "../assets/images/production ID_5056537.mp4";
import poster from "../assets/images/hero-video-placeholder.png";

function Hero() {
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
        <a href="#my-work" className="btn-hero" title="View Projects Link">
          view my projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
