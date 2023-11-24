import './Coursework4.css';
import React from 'react';

class Coursework4 extends React.Component {
   constructor() {
      super();
      this.state = {
         c1: true,
         c2: false,
         c3: false,
         c4: false,
         c5: false,
         c6: false
      };
      this.handleClick_c1 = this.handleClick_c1.bind(this);
      this.handleClick_c2 = this.handleClick_c2.bind(this);
      this.handleClick_c3 = this.handleClick_c3.bind(this);
      this.handleClick_c4 = this.handleClick_c4.bind(this);
      this.handleClick_c5 = this.handleClick_c5.bind(this);
      this.handleClick_c6 = this.handleClick_c6.bind(this);
   }

   handleClick_c1(e) {
      e.preventDefault();
      this.setState({ c1: true,
                      c2: false,
                      c3: false,
                      c4: false,
                      c5: false,
                      c6: false});
   }

   handleClick_c2(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: true,
         c3: false,
         c4: false,
         c5: false,
         c6: false});
   }

   handleClick_c3(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: true,
         c4: false,
         c5: false,
         c6: false});
   }

   handleClick_c4(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: true,
         c5: false,
         c6: false});
   }

   handleClick_c5(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: true,
         c6: false});
   }

   handleClick_c6(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: false,
         c6: true});
   }

   render() {
      return (
         <div className="coursework4">
            <div className="coursework4-left">
               <div className="coursework4-course-box">
                     <button className={this.state.c1 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c1}>CMSC330</button>
                     {this.state.c1 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c2 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c2}>CMSC351</button>
                     {this.state.c2 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c3 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c3}>CMSC389O</button>
                     {this.state.c3 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c4 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c4}>CHSE338X</button>
                     {this.state.c4 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c5 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c5}>ENES140</button>
                     {this.state.c5 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c6 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c6}>PSYC123</button>
                     {this.state.c6 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework4-right">
               {this.state.c1 ? (<p className="coursework4-course-name">Organization of Programming Languages</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework4-course-desc">A study of programming languages, including their syntax, semantics, and implementation. Several different models of languages are discussed, including dynamic, scripting (e.g., Ruby, Python) functional (e.g., OCaml, Haskell, Scheme), and memory safe systems programming (e.g., Rust). Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework4-course-name">Algorithms</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework4-course-desc">A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework4-course-name">The Coding Interview</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework4-course-desc">A comprehensive, practical introduction to technical interviews. We'll go over basic topics such as Big O and String Manipulation and then dive into more complex topics such as Bit Manipulation and Dynamic Programming.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework4-course-name">Intergroup Dialogue: Socioeconomic Status</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework4-course-desc">This course engages students, from one or more social/cultural identity groups, in facilitated dialogue grounded in social justice education around the power dynamics, tensions, similarities, and differences of experience that exist within a group and/or between and across groups.  Ultimately, this course is about sharing diverse perspectives, learning how to ask others about their experiences, and developing the ability to understand how our identities impact how we experience the world.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework4-course-name">Discovering New Ventures</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework4-course-desc">Explore dynamic startup topics by designing a new venture this term. Learn how to identify and explore entrepreneurial opportunities. Build your entrepreneurial mindset and business skillsets to launch new ventures.</p>) : (<div/>)}
               {this.state.c6 ? (<p className="coursework4-course-name">Psychology of Getting Hired</p>) : (<div/>)}
               {this.state.c6 ? (<p className="coursework4-course-desc">Designed to introduce students to the science behind the hiring process and to prepare individuals with the academic and practical training required.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework4;