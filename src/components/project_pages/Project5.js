import './Project-Page-Right.css';
import './Project5.css';
import GitHubIcon from '../../icons/github';
import React from 'react';

function Project5() {
   return (
     <div className="project-page">
         <div className="p5-project-img-container"/>
         <div className="p5-project-desc-box">
            <div className="project-title-box">
               <p className="project-category">University of Maryland</p>
               <p className="project-title">Fish Survival Simulator</p>
            </div>
            <div className="project-desc">
               <p className="project-desc-text">A dynamic ecosystem where fishes interact with plants and rocks, showcasing growth, predation, and explosive reproduction in a delicate balance of survival.</p>
            </div>
            <div className="project-tools-box">
               <div className="project-tools">
                  <p className="project-tool"></p>
                  <p className="project-tool"></p>
                  <p className="project-tool"></p>
                  <p className="project-tool">Java GUI</p>
                  <p className="project-tool">Java</p>
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
 
 export default Project5;