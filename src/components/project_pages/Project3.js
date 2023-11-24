import "./Project-Page-Right.css";
import "./Project3.css";
import React from "react";
import $ from "jquery";
import GitHubIcon from "../../icons/github";

function Project3() {
  return (
    <div className="project-page">
      <div className="p3-project-img-container" />
      <div className="p3-project-desc-box">
        <div className="project-title-box">
          <p className="project-category">University of Maryland</p>
          <p className="project-title">Maze Runner</p>
        </div>
        <div className="project-desc">
          <p className="project-desc-text">
            This project solves mazes as graphs with random weights, employing
            algorithms like Depth-First-Search, Breadth-First-Search, and
            Dijkstra's Algorithm for optimal path finding.
          </p>
        </div>
        <div className="project-tools-box">
          <div className="project-tools">
            <p className="project-tool"></p>
            <p className="project-tool"></p>
            <p className="project-tool">Java GUI</p>
            <p className="project-tool">Java</p>
          </div>
        </div>
        <div className="project-link-box">
          <a href="https://github.com/ctgchris/fish-survival-simulator/">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
