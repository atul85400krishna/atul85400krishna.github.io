import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiBootstrap,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <p className="section__title different">recently worked on:-</p>
        <div className="allProjects">
{/* 1st */}

<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://files.helpdocs.io/jFZtj3buMS/articles/ds7nheoydq/1623154735996/start-free-trial.png"
                 
                    alt="hiver-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Hiver”.</h2>
                <p>
                Join the 8000+ teams that are using Hiver to deliver a great customer experience.
                Hiver leads the way in security
                Keeping your data safe is our topmost priority. Hiver is the only
                customer service solution that does not store your EmailSharp
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                </div>
                <div>
                  <a
                    href="https://rainbow-churros-cbb8c1.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/MAYURESHBAILURKAR/puffy-rain-1236"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                       Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* 2nd */}


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/manojattri181/Fit-meal-website-clone/blob/master/home2.JPG?raw=true"
                    alt="fit-meal"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Fit-Meal”.</h2>
                <p>“Fit-Meal” It's not just food,
                It's a lifestyle!We break the stereotype ‘healthy eating is boring”. Reach your weight, health and workout 
                goals with deliciously healthy food.
                 We have various diet plans customised to suit your specific health and weight requirements.  
                 </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                   
                </div>
                <div>
                  <a
                    href="https://fit-meal.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/manojattri181/Fit-meal-website-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          
          
        </div>
      </div>
    </>
  );
};
