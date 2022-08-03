import React, { useState, useEffect } from "react";
import Project from "./Project";

function Portfolio() {
  useEffect(() => {
    document.title = "jessica chen | portfolio";
  });

  const [projects] = useState([
    {
      project_name: "Nook Blog App Project",
      short_name: "Nook",
      description:
        "Nook Blog - A full-stack app written with in Node.js, Express.js, Handlebars and Foundations as a team project.",
      live_link: "http://morning-fortress-48397.herokuapp.com/",
      source_code_link: "https://github.com/CU-P2-Group1/p2-group1-nook-blog",
      image_src: "/images/nookblog.png",
    },
    {
      project_name: "Weather App Project",
      short_name: "Weather App",
      description:
        "A weather app written in Vanilla JS and Bootstrap that provides real-time data!",
      live_link: "https://xenodochial-visvesvaraya-32ca77.netlify.app/",
      source_code_link: "https://github.com/jess-n-chen/my-awesome-weather-app",
      image_src: "/images/weather-1.png",
    },
    {
      project_name: "MuchBetterDictionary App Project",
      short_name: "MBD",
      description:
        "MuchBetterDictionary (MBD) - A dictionary app written for a team project.",
      live_link: "https://muchbetterdictionary.github.io/MuchBetterDictionary/",
      source_code_link:
        "https://github.com/MuchBetterDictionary/MuchBetterDictionary",
      image_src: "/images/MuchBetterDictionary.png",
    },
    {
      project_name: "Dictionary App Project",
      short_name: "Dictionary App",
      description:
        "A dictionary app written with React.JS to help you learn unknown words faster!",
      live_link: "https://priceless-payne-e728b9.netlify.app/",
      source_code_link: "https://github.com/jess-n-chen/dictionary-app-react",
      image_src: "/images/dictionary-app.png",
    },
    {
      project_name: "Coding Quiz App Project",
      short_name: "Coding Quiz App",
      description:
        "A coding quiz app written in vanilla JS to test your knowledge on Javascript!",
      live_link: "https://jess-n-chen.github.io/jc-cu-c4-code-quiz/",
      source_code_link: "https://github.com/jess-n-chen/jc-cu-c4-code-quiz",
      image_src: "/images/coding-quiz-challenge.png",
    },
    {
      project_name: "Weather App React Project",
      short_name: "Weather App",
      description:
        "Another version of my weather app written in React.JS that provides real-time data!",
      live_link: "https://jolly-babbage-c61314.netlify.app/",
      source_code_link: "https://github.com/jess-n-chen/weather-app-react-js",
      image_src: "/images/weather.png",
    },
    {
      project_name: "Slytherin Social MERN Project",
      short_name: "Slytherin Social",
      description: "A new way to connect with your friends!",
      live_link: "https://slytherin-social.herokuapp.com/",
      source_code_link:
        "https://github.com/slytherin-CU-VIRT-BO/slytherin-social-app",
      image_src: "/images/slytherin-social.png",
    },
  ]);

  return (
    <section id="my-work" className="projects">
      <div className="secondary-section">
        <div className="section-title-secondary">
          <h2>My Work</h2>
        </div>
        <div className="row mx-3 mt-3">
          {projects.map((projectData, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <Project data={projectData} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
