import React from "react";
import "./projects.css";

import WebDesign from "../../assets/website-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I have solve more than 150 questions of DSA on leetcode and on other
        platforms.I am quite good in C++.I have made projects like movie search
        website in reactjs and ecommerce website in laravel framework.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <a href="https://github.com/Isha790/movie.git">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          </a>

          <div className="skillBarText">
            <h2>Ecommerce website</h2>
            <p>
              <b>Technology stack :</b>
              <br></br>
              Backend: Laravel PHP Framework<br></br>
              Frontend: HTML, CSS, JavaScript<br></br>
              Database: MySQL<br></br>
              Other technologies: Blade templates for views, Eloquent ORM for
              database interactions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <a href="https://github.com/Isha790/ecomsingle">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          </a>
         
          <div className="skillBarText">
            <h2>Movie Search Website</h2>
            <p>
            <b>Technology stack :</b><br></br>
             Frontend: React.js, JavaScript (ES6+), HTML, CSS<br></br>
              API Integration:Integration with movie databases or APIs like IMDb.<br></br><br></br>
              <b>Project Scope:</b>Project Scope: The website encompasses a vast movie database,
              search functionalities, and user management. It does not include
              streaming services but focuses on providing information and
              creating a personalized movie exploration experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
