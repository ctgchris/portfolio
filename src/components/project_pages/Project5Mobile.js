import './Project5Mobile.css';
import GitHubIcon from '../../icons/github';
import React from 'react';

function Project5Mobile() {
   return (
     <div className="project-page-mobile">
         <div className="p5-overlay-mobile"/>
         <div className="p5-project-desc-box-mobile">
            <div className="project-title-box-mobile">
               <p className="project-category-mobile">University of Maryland</p>
               <p className="project-title-mobile">Fish Survival Simulator</p>
            </div>
            <div className="project-desc-box-mobile">
               <div className="project-desc-mobile">
                  <p className="project-desc-text-mobile">A dynamic ecosystem where fishes interact with plants and rocks, showcasing growth, predation, and explosive reproduction in a delicate balance of survival.</p>
               </div>
            </div>
            <div className="project-tools-box-mobile">
               <div className="project-tools-mobile">
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile"></p>
                  <p className="project-tool-mobile">Java GUI</p>
                  <p className="project-tool-mobile">Java</p>
               </div>
            </div>
            <div className="project-link-box-mobile">
               <a href="https://github.com/ctgchris/fish-survival-simulator/">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project5Mobile;