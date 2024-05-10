import React from "react";
import ProjectBox from "./ProjectBox";
import FunkoPop from "../images/FunkoPop.jpg";
import ColourImage from "../images/ColourPal.png";
import Movies from "../images/Movies.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={FunkoPop} projectName="FunkoPop" />
        <ProjectBox projectPhoto={Movies} projectName="Movies" />
        <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
      </div>
    </div>
  );
};

export default Projects;
