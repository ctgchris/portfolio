import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import React from 'react';

function Social() {
   return (
     <div className="socials">
         <div className="social-icons">
            <a href="https://github.com/ctgchris">
               <GitHubIcon className="svg-icon"/>
            </a>
            <a href="https://www.instagram.com/ctg.chris">
               <InstagramIcon className="svg-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/christophergiang">
               <LinkedinIcon className="svg-icon"/>
            </a>
            <a href="mailto: christopher.t.giang@gmail.com">
               <EmailIcon className="svg-icon"/>
            </a>
         </div>
         <div className="social-line">
            <div className="line"/>
         </div>
     </div>
   );
 }
 
 export default Social;