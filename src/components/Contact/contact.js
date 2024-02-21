import React, { useRef, useState } from "react";
import "./contact.css";
import cpp from "../../assets/cpp.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mysql from "../../assets/mysql.png";
import bootstrap from "../../assets/bootstrap.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.jpg";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const[reply,setReply]=useState('');
  // const handlereply=()=>{
  //   const reply ='Hi ${reply_to}'
  // }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_075g9fh",
        "template_2r4gavs",
        form.current,
        "YF13b5VXudXS_xvZw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent to ${from_name}");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="skill1">
        <h1 className="contactPageTitle">My Skills</h1>
        <div className="skillImgs">
          <div class="image-row">
            <img src={cpp} alt="cpp" className="skillImg" />
            <img src={html} alt="html" className="skillImg" />
            <img src={css} alt="css" className="skillImg" />
            <img src={js} alt="js" className="skillImg" />
          </div>
          <div class="image-row">
            <img src={react} alt="react" className="skillImg" />
            <img src={node} alt="node" className="skillImg" />
            <img src={mysql} alt="mysql" className="skillImg" />
            <img src={bootstrap} alt="bootstrap" className="skillImg" />
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <a href="https://github.com/Isha790">
              <img src={github} alt="github" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/isha002/">
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
            <a href="https://www.youtube.com/channel/UC00z-0B8goHsl9SV-4vnL9Q">
              <img src={YouTubeIcon} alt="Youtube" className="link" />
            </a>
            <a href="https://www.instagram.com/__khatri.isha__/">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
