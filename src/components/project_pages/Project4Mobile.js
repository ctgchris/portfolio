import './Project4Mobile.css';
import GitHubIcon from '../../icons/github';
import React from 'react';
import $ from 'jquery';
function Project4Mobile() {
   return (
     <div className="L-project-page-mobile">
         <div className="L-p4-overlay-mobile"/>
         <div className="L-p4-project-desc-box-mobile">
            <div className="L-project-title-box-mobile">
               <p className="L-project-category-mobile">Personal Project</p>
               <p className="L-project-title-mobile">Pokemon Memory Game</p>
            </div>
            <div className="L-project-desc-box-mobile">
               <div className="L-project-desc-mobile">
                  <p className="L-project-desc-text-mobile">A web app I built that acts a memory card game but with a fun twist involving pokemon.</p>
               </div>
            </div>
            <div className="L-project-tools-box-mobile">
               <div className="L-project-tools-mobile">
                  <p className="L-project-tool-mobile">React</p>
                  <p className="L-project-tool-mobile">API</p>
                  <p className="L-project-tool-mobile">JavaScript</p>
                  <p className="L-project-tool-mobile">HTML</p>
                  <p className="L-project-tool-mobile">CSS</p>
               </div>
            </div>
            <div className="L-project-link-box-mobile">
               <a href="https://github.com/ctgchris/memory-card">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project4Mobile;