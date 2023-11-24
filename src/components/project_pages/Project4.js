import './Project-Page-Left.css';
import './Project4.css';
import project4 from '../../images/project4.png';
import GitHubIcon from '../../icons/github';
import React from 'react';

function Project4() {
   return (
     <div className="L-project-page">
         <div className="L-p4-project-img-container"/>
         <div className="p4-L-project-desc-box">
            <div className="L-project-title-box">
               <p className="L-project-category">Personal Project</p>
               <p className="L-project-title">Pokemon Memory Game</p>
            </div>
            <div className="L-project-desc">
               <p className="L-project-desc-text">A web app I built that acts a memory card game but with a fun twist involving pokemon.</p>
            </div>
            <div className="L-project-tools-box">
               <div className="L-project-tools">
                  <p className="L-project-tool">React</p>
                  <p className="L-project-tool">API</p>
                  <p className="L-project-tool">JavaScript</p>
                  <p className="L-project-tool">HTML</p>
                  <p className="L-project-tool">CSS</p>
               </div>
            </div>
            <div className="L-project-link-box">
               <a href="https://github.com/ctgchris/memory-card">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project4;