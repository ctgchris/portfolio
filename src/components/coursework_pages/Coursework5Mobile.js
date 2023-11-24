import './Coursework5Mobile.css';
import React from 'react';

class Coursework5Mobile extends React.Component {
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
         <div className="coursework5-mobile">
            <div className="coursework5-top-mobile">
               <div className="coursework5-course-box-mobile">
                  <button className={this.state.c1 ? "coursework5-course-clicked-mobile" : "coursework5-course-mobile"} onClick={this.handleClick_c1}>CMSC426</button>
                  {this.state.c1 ? (<div className="coursework5-line-box-mobile"><div className="coursework5-line-mobile"/></div>) : (<div className="coursework5-line-box-mobile"/>)}
               </div>
               <div className="coursework5-course-box-mobile">
                  <button className={this.state.c2 ? "coursework5-course-clicked-mobile" : "coursework5-course-mobile"} onClick={this.handleClick_c2}>HACS498</button>
                  {this.state.c2 ? (<div className="coursework5-line-box-mobile"><div className="coursework5-line-mobile"/></div>) : (<div className="coursework5-line-box-mobile"/>)}
               </div>
               <div className="coursework5-course-box-mobile">
                  <button className={this.state.c3 ? "coursework5-course-clicked-mobile" : "coursework5-course-mobile"} onClick={this.handleClick_c3}>HACS408O</button>
                  {this.state.c3 ? (<div className="coursework5-line-box-mobile"><div className="coursework5-line-mobile"/></div>) : (<div className="coursework5-line-box-mobile"/>)}
               </div>
               <div className="coursework5-course-box-mobile">
                  <button className={this.state.c4 ? "coursework5-course-clicked-mobile" : "coursework5-course-mobile"} onClick={this.handleClick_c4}>CMSC320</button>
                  {this.state.c4 ? (<div className="coursework5-line-box-mobile"><div className="coursework5-line-mobile"/></div>) : (<div className="coursework5-line-box-mobile"/>)}
               </div>
               <div className="coursework5-course-box-mobile">
                  <button className={this.state.c5 ? "coursework5-course-clicked-mobile" : "coursework5-course-mobile"} onClick={this.handleClick_c5}>FREN250</button>
                  {this.state.c5 ? (<div className="coursework5-line-box-mobile"><div className="coursework5-line-mobile"/></div>) : (<div className="coursework5-line-box-mobile"/>)}
               </div>
            </div>
            <div className="coursework5-bottom-mobile">
            {this.state.c1 ? (<p className="coursework5-course-name-mobile">Advanced Data Structures</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework5-course-desc-mobile">This course presents fundamental data structures, the algorithms for building and maintaining them, and the mathematical methods for analyzing their efficiencies.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework5-course-name-mobile">Web Application Development with JavaScript</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework5-course-desc-mobile">The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications that interact with Web services and back-end databases. </p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework5-course-name-mobile">Leading Global Teams and Engaging Across Cultures in Business, Engineering, and Technology</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework5-course-desc-mobile">This course provides an intellectual and experiential forum for developing the interpersonal-intercultural communication and interaction skills necessary for international managers and travelers.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework5-course-name-mobile">Technical Writing</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework5-course-desc-mobile">This course focuses on the writing of technical papers and reports.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework5Mobile;