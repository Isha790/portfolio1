import React from "react";
import "./education.css";

const Works = () => {
  return (
    <section id="education">
      <h2 className="eduTitle">My Education</h2>
      <div className="eduDesc">
        <div className="educationItem">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p>Lovely Professional University | Phagwara, Punjab</p>
          <p>CGPA: 8.47 (current) | Graduated: 2024</p>
        </div>
        <div className="educationItem">
          <h3>Higher Secondary</h3>
          <p>Mother Teresa School | Balotra, Rajasthan</p>
          <p>Percentage: 90.17% | 2019</p>
        </div>
        <div className="educationItem">
          <h3>Matriculation</h3>
          <p>Agrasen Vidhya School | Balotra, Rajasthan</p>
          <p>Percentage: 90.31% | 2017</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
