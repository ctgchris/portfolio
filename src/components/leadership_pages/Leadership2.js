import "../experience_pages/Experience-Page.css";
import arrow from "../../images/arrow.png";
import React from "react";

class Leadership2 extends React.Component {
  render() {
    return (
      <div className="experience-page">
        <div
          className={
            this.props.desktop ? "job-header-box" : "job-header-box-mobile"
          }
        >
          <div
            className={
              this.props.desktop ? "job-title-box" : "job-title-box-mobile"
            }
          >
            <p
              className={this.props.desktop ? "job-title" : "job-title-mobile"}
            >
              Logistics Organizer
            </p>
            <p
              className={
                this.props.desktop ? "company-title" : "company-title-mobile"
              }
            >
              @ Bitcamp
            </p>
          </div>
          <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>
            September 2023 - Present
          </p>
        </div>
        <div className="job-desc-box">
          <div
            className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}
          >
            <img src={arrow} className="bullet" />
            <p
              className={
                this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"
              }
            >
              Support Bitcamp's personnel team by recruiting and managing a team
              of 25+ volunteers and mentors to assist in developing technical
              workshops.
            </p>
          </div>
          <div
            className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}
          >
            <img src={arrow} className="bullet" />
            <p
              className={
                this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"
              }
            >
              Work in a team of 8 to brainstorm and execute ideas to ensure a seamless Hackathon experience for an expected
              1700+ students.
            </p>
          </div>
          <div
            className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}
          >
            <img src={arrow} className="bullet" />
            <p
              className={
                this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"
              }
            >
              Colloborate with other
              Bitcamp teams such as Finance, Events, Design to properly plan out
              logistics and equipment needed.
            </p>
          </div>
          <div
            className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}
          >
            <img src={arrow} className="bullet" />
            <p
              className={
                this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"
              }
            >
              Partner with the UMD Division of IT to coordinate all technical
              aspects, such as wifi, audio, monitors, and power
              strips.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Leadership2;
