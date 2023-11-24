import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience1 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Computer Science Tutor</p>
                  <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ UMD</p> 
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>July 2023 - Present</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Conducted engaging guided study sessions and developed tailored lesson plans to enhance comprehension and retention for 20+ students.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Tutored students on Algorithms for a total of 45+ hours and received a 4.9/5 overall rating in student feedback surveys.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience1;