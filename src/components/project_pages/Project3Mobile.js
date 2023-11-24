import './Project3Mobile.css';
import React from 'react';
import $ from 'jquery';
import GitHubIcon from '../../icons/github';

function Project3Mobile() {
   return (
     <div className="project-page-mobile">
         <div className="p3-overlay-mobile"/>
         <div className="p3-project-desc-box-mobile">
            <div className="project-title-box-mobile">
               <p className="project-category-mobile">University of Maryland</p>
               <p className="project-title-mobile">Maze Runner</p>
            </div>
            <div className="project-desc-box-mobile">
               <div className="project-desc-mobile">
                  <p className="project-desc-text-mobile">This project solves mazes as graphs with random weights, employing algorithms like Depth-First-Search, Breadth-First-Search, and Dijkstra's Algorithm for optimal path finding.</p>
               </div>
            </div>
            <div className="project-tools-box-mobile">
               <div className="project-tools-mobile">
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile">Java GUI</p>
                  <p className="project-tool-mobile">Java</p>
               </div>
            </div>
            <div className="project-link-box">
               <a href="https://github.com/ctgchris/fish-survival-simulator/">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project3Mobile;