import './Coursework1.css';
import React from 'react';

class Coursework1 extends React.Component {
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
         <div className="coursework1">
            <div className="coursework1-left">
               <div className="coursework1-course-box">
                  <button className={this.state.c1 ? "coursework1-course-clicked" : "coursework1-course"} onClick={this.handleClick_c1}>CMSC131</button>
                  {this.state.c1 ? (<div className="coursework1-line-box"><div className="coursework1-line"/></div>) : (<div/>)}
               </div>
               <div className="coursework1-course-box">
                  <button className={this.state.c2 ? "coursework1-course-clicked" : "coursework1-course"} onClick={this.handleClick_c2}>MATH140</button>
                  {this.state.c2 ? (<div className="coursework1-line-box"><div className="coursework1-line"/></div>) : (<div/>)}
               </div>
               <div className="coursework1-course-box">
                  <button className={this.state.c3 ? "coursework1-course-clicked" : "coursework1-course"} onClick={this.handleClick_c3}>JOUR282</button>
                  {this.state.c3 ? (<div className="coursework1-line-box"><div className="coursework1-line"/></div>) : (<div/>)}
               </div>
               <div className="coursework1-course-box">
                  <button className={this.state.c4 ? "coursework1-course-clicked" : "coursework1-course"} onClick={this.handleClick_c4}>COMM107</button>
                  {this.state.c4 ? (<div className="coursework1-line-box"><div className="coursework1-line"/></div>) : (<div/>)}
               </div>
               <div className="coursework1-course-box">
                  <button className={this.state.c5 ? "coursework1-course-clicked" : "coursework1-course"} onClick={this.handleClick_c5}>HLTH234</button>
                  {this.state.c5 ? (<div className="coursework1-line-box"><div className="coursework1-line"/></div>) : (<div/>)}
               </div>
            </div>
            <div className="coursework1-right">
               {this.state.c1 ? (<p className="coursework1-course-name">Object-Oriented Programming I</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework1-course-desc">This is the first programming course for Computer Science majors with a focus on object-oriented programming. The goal of the course is to develop skills such as program design and testing as well as the implementation of programs using a graphical IDE. All programming is done in Java.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework1-course-name">Calculus I</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework1-course-desc">Introduction to calculus, including functions, limits, continuity, derivatives and applications of the derivative, sketching of graphs of functions, introduction to definite and indefinite integrals, and calculation of area.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework1-course-name">Beyond Facebook: How Social Media are Transforming Society, Culture, Business and Politics</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework1-course-desc">Examining the rise of social media and their impact on culture, business, government, politics, journalism and society, this course provides students with a broad contextual understanding of the multidisciplinary impacts of social media such as Twitter, Facebook and similar Internet-based services.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework1-course-name">Oral Communication</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework1-course-desc">A study of how perception, self-concept, and verbal and nonverbal communications affect the communication process as it emerges in the workplace. The course provides skill training in speech writing, public speaking, group communication, interpersonal communication, listening, and responding.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework1-course-name">Global Health Messages: Understanding Exposure & Impact</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework1-course-desc">Using a global perspective, this course teaches students to be critical consumers of current and historical health communication interventions. It also provides students with the skills to develop media interventions that target specific and general populations. Students will discover the array of diverse media messages that influence the health and well-being of individuals and communities.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework1;