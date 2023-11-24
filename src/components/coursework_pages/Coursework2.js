import './Coursework2.css';
import React from 'react';

class Coursework2 extends React.Component {
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
         <div className="coursework2">
            <div className="coursework2-left">
               <div className="coursework2-course-box">
                     <button className={this.state.c1 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c1}>CMSC132</button>
                     {this.state.c1 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c2 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c2}>MATH141</button>
                     {this.state.c2 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c3 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c3}>MATH206</button>
                     {this.state.c3 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c4 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c4}>AOSC200</button>
                     {this.state.c4 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework3-course-box">
                     <button className={this.state.c5 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c5}>THET110</button>
                     {this.state.c5 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework2-right">
               {this.state.c1 ? (<p className="coursework2-course-name">Object Oriented Programming II</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework2-course-desc">Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs).</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework2-course-name">Calculus II</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework2-course-desc">Topics include techniques of integration, improper integrals, applications of integration (such as volumes, work, arc length, moments), inverse functions, exponential and logarithmic functions, sequences and series. </p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework2-course-name">Introduction to MATLAB</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework2-course-desc">Fundamentals of Matlab, including how to run the software, basic commands, variables, solving equations, simple (pre-) calculus operations, matrices and vectors, functions, basic programming and M-files. </p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework2-course-name">Weather and Climate</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework2-course-desc">Examine fundamental issues such as the greenhouse effect, severe weather, global weather patterns and air pollution and how these factors are affected by a changing climate. Instruction in the lectures will provide the basic knowledge needed to understand these issues."</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-name">Intro to Theatre</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-desc">Learn how to “read,” describe, interpret, and analyze both theatrical and everyday performances, and class will pay particular attention to how performance constitutes understandings of race, gender, ethnicity, and ability. In addition to learning about and watching performances, we will engage in our own performance practice.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework2;