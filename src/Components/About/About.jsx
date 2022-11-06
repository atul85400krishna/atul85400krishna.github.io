import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
 
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
 
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">ATUL KRISHNA</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Innovative, task-driven professional in web-designing, proficent in 
        developing databases, user interfaces, writing & testing Codes, and implementing the featured based on the feedback.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/atul85400krishna"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm#sent?compose=new"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917979053308"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/atul-krishna-72b4551b8/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
           
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1GbvdNI3AJsaBD8I8T15xZkL5G-calvg7/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
       
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
