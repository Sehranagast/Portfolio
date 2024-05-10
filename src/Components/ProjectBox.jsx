import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FunkoPopDesc:
      "It's an ecommerce, the first one where I applied React. First practice with an API. Made for a Coderhouse course",
    FunkoPopGithub: "https://github.com/Sehranagast/funko",

    MoviesDesc:
      "This web app  is for helping you find your desired movie. I also learned new CSS properties and tricks.",
    MoviesGithub: "https://github.com/Sehranagast/Movie-app",

    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette",
    ColourPaletteGithub: "https://github.com/Sehranagast/Colour-Palette",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
