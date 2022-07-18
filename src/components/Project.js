import React from "react";

function Project({ data }) {
  const {
    project_name,
    short_name,
    description,
    live_link,
    source_code_link,
    image_src,
  } = data;

  return (
    <article className="project-tile">
      <a
        href={live_link}
        target="_blank"
        rel="noreferrer"
        className="image-link mx-auto"
        title={project_name}
      >
        <img src={require(`../assets${image_src}`)} alt={project_name} />
      </a>
      <div className="project-desc">
        <h3>{short_name}</h3>
        <p>{description}</p>
        <p>
          <a
            className="source-link"
            href={source_code_link}
            target="_blank"
            rel="noreferrer"
            title={`${short_name} App Source Code Link`}
          >
            Source Code
          </a>
        </p>
        <a
          href={live_link}
          target="_blank"
          rel="noreferrer"
          className="section-links mt-3"
          title={`${short_name} App Link`}
        >
          Launch {short_name}
        </a>
      </div>
    </article>
  );
}

export default Project;
