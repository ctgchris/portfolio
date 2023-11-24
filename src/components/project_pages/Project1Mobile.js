import "./Project1Mobile.css";
import GitHubIcon from "../../icons/github";
import React from "react";
import $ from "jquery";
function Project1Mobile() {
  return (
    <div className="project-page-mobile">
      <div className="p1-overlay-mobile" />
      <div className="p1-project-desc-box-mobile">
        <div className="project-title-box-mobile">
          <p className="project-category-mobile">Personal Project</p>
          <p className="project-title-mobile">Wordle Clone</p>
        </div>
        <div className="project-desc-box-mobile">
          <div className="project-desc-mobile">
            <p className="project-desc-text-mobile">
              A recreation of the viral web game where the user guesses a 5
              letter word within 6 attempts.
            </p>
          </div>
        </div>
        <div className="project-tools-box-mobile">
          <div className="project-tools-mobile">
            <p className="project-tool-mobile"></p>
            <p className="project-tool-mobile"></p>
            <p className="project-tool-mobile"></p>
            <p className="project-tool-mobile">Python</p>
            <p className="project-tool-mobile">Pygames</p>
          </div>
        </div>
        <div className="project-link-box-mobile">
          <a href="https://github.com/ctgchris/wordle-game">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1Mobile;
