import '../experience_pages/Experience-Page.css';
import './Leadership1.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Leadership1 extends React.Component {
   render() {
      return (
         <div className="leadership-page">
            <div className="experience-page">
               <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
                  <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                     {this.props.desktop ? (<p className="job-title">Software Engineer Mentee</p>) : (<p className="job-title-mobile">Bootcamp</p>)}
                     <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Hack4Impact</p>
                  </div>
                  <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>September 2023 - Present</p>
               </div>
               <div className="job-desc-box">
                  <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                     <img src={arrow} className="bullet"/>
                     <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Hack4Impact is an organization in which students form project teams to build full-stack software solutions for NPOs to make a positive impact.</p>
                  </div>
                  <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                     <img src={arrow} className="bullet"/>
                     <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>This year, I am participating in a semester-long boot camp to learn a comprehensive toolkit of full-stack web development skills.</p>
                  </div>
                  <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                     <img src={arrow} className="bullet"/>
                     <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I collaborate with my peers to build web applications using the MERN stack.</p>
                  </div>
               </div>
            </div>
            
         </div>
       );
   }
}

export default Leadership1;