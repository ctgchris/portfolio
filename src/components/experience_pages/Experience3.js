import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience3 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Seasonal Sales Lead</p>
                  <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Tommy Hilfiger</p>
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>July 2019 - August 2022</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Trained and mentored 10 new hires in company processes, product knowledge, and customer service.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Managed and oversaw a 30-member sales associate team, responsible for delegating daily tasks, offering guidance, and coordinating weekly shift schedules.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience3;