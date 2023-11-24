import '../styles/SocialMobile.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import React from 'react';

function SocialMobile() {
   return (
     <div id="SocialMobile" className="socials-mobile">
         <div className="social-icons-mobile">
            <a href="https://github.com/ctgchris" className="social-icon-mobile">
               <GitHubIcon/>
            </a>
            <a href="https://www.instagram.com/ctg.chris">
               <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/christophergiang">
               <LinkedinIcon/>
            </a>
            <a href="mailto: christopher.t.giang@gmail.com">
               <EmailIcon/>
            </a>
         </div>
     </div>
   );
 }
 
 export default SocialMobile;