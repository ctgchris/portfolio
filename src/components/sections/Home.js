import '../styles/Home.css';
import React from 'react';
function Home({ desktop }) {
   return (
     <div id="Home" className={desktop ? "home" : "home-mobile"}>
         <div className={desktop ? "home-intro" : "home-intro-mobile"}>
            <p className={desktop ? "intro-text" : "intro-text-mobile"}>Hello! My name is</p>
            <p className={desktop ? "name-text" : "name-text-mobile"}>Christopher Giang.</p>
            <p className={desktop ? "desc-text" : "desc-text-mobile"}>I study Computer Science at UMD.</p>
            <div className={desktop ? "short-intro-box" : "short-intro-box-mobile"}>
               <p className={desktop ? "short-intro-text" : "short-intro-text-mobile"}>I'm a third-year student at the University of Maryland - College Park. I've recently been self teaching myself full stack development and am now an active member in school organizations such as Hack4Impact & Bitcamp. I am passionate about leveraging technology to create meaningful change and consistently seeking opportunities to tackle new challenges and expand my skill set.</p>
            </div>
         </div>
     </div>
   );
 } 
 
 export default Home;