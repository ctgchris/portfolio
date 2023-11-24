import './Coursework3Mobile.css';
import React from 'react';

class Coursework3Mobile extends React.Component {
   constructor() {
      super();
      this.state = {
         c1: true,
         c2: false,
         c3: false, 
         c4: false,
         c5: false
      };
      this.handleClick_c1 = this.handleClick_c1.bind(this);
      this.handleClick_c2 = this.handleClick_c2.bind(this);
      this.handleClick_c3 = this.handleClick_c3.bind(this);
      this.handleClick_c4 = this.handleClick_c4.bind(this);
      this.handleClick_c5 = this.handleClick_c5.bind(this);
   }

   handleClick_c1(e) {
      e.preventDefault();
      this.setState({ c1: true,
                      c2: false,
                      c3: false,
                      c4: false,
                      c5: false});
   }

   handleClick_c2(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: true,
         c3: false,
         c4: false,
         c5: false});
   }

   handleClick_c3(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: true,
         c4: false,
         c5: false});
   }

   handleClick_c4(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: true,
         c5: false});
   }

   handleClick_c5(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: true});
   }

   render() {
      return (
         <div className="coursework3-mobile">
            <div className="coursework3-top-mobile">
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c1 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c1}>CMSC250</button>
                  {this.state.c1 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c2 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c2}>CMSC216</button>
                  {this.state.c2 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c3 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c3}>STAT400</button>
                  {this.state.c3 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c4 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c4}>ENES210</button>
                  {this.state.c4 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c5 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c5}>EDCP108I</button>
                  {this.state.c5 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
            </div>
            <div className="coursework3-bottom-mobile">
            {this.state.c1 ? (<p className="coursework3-course-name-mobile">Discrete Structures</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework3-course-desc-mobile">Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework3-course-name-mobile">Introduction to Computer Systems</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework3-course-desc-mobile">Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework3-course-name-mobile">Applied Probability and Statistics</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework3-course-desc-mobile">Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework3-course-name-mobile">Entrepreneurial Opportunity Analysis and Decision-Making in 21st Century Technology Ventures</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework3-course-desc-mobile">Introduction to the principles of entrepreneurial opportunity analysis and decision-making in an increasingly dynamic and technically-inclined society. Emphasis is placed on how aspiring technology entrepreneurs can develop their entrepreneurial perspectives to develop winning entrepreneurial plans for their future ventures.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-name-mobile">College and Career Advancement: Concepts and Skills; Academic Transitions to Internships</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-desc-mobile">This course is designed to provide students with the full experience of searching for an internship. You will be provided with information that will assist your success personally, academically and professionally. Themes include the importance of targeting your resume and cover letter to internship postings, communicating interests and skills to potential employers, searching for internships, networking with alumni and professionals in your intended career field and more.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework3Mobile;