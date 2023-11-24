import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience2 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Software Developer Intern</p>
                  {this.props.desktop ? (<p className="company-title">@ GDIT</p>) : (<p className="company-title-mobile">@ GDIT</p>)}
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>June 2023 - August 2023</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Researched innovative techniques for obfuscation and deletion of personal data in automobile telematics systems.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Successfully extracted telematics data from Toyota and Lexus cars through infotainment systems using USB.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Created Python scripts to analyze telematic files and compare before and after factory reset of infotainment.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Created Python scripts to analyze telematic files and compare before and after factory reset of infotainment.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Discovered that phone identifiers, 95% of music history, and all location history remained after reset.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Achieved company recognition for innovations in data security within car telematics, driving interest in potential research and contract collaborations.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience2;