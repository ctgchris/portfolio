import './Project-Page-Right.css';
import './Project1.css';
import GitHubIcon from '../../icons/github';
import React from 'react';

function Project1() {
   return (
     <div className="project-page">
         <div className="p1-project-img-container"/>
         <div className="p1-project-desc-box">
            <div className="project-title-box">
               <p className="project-category">Personal Project</p>
               <p className="project-title">Wordle Clone</p>
            </div>
            <div className="project-desc">
               <p className="project-desc-text">A recreation of the viral web game where the user guesses a 5 letter word within 6 attempts.</p>
            </div>
            <div className="project-tools-box">
               <div className="project-tools">
               <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool">Python</p>
                  <p className="project-tool">Pygames</p>
               </div>
            </div>
            <div className="project-link-box">
               <a href="https://github.com/ctgchris/wordle-game">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project1;