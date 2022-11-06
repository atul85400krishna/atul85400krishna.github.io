import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaNode  } from "react-icons/fa";
 

import {
  SiRedux,
  SiHtml5,
  SiTypescript,
  SiChakraui,
  SiExpress,
  SiPostman,
  SiHeroku,
  SiCodesandbox,
 
} from "react-icons/si";
import { DiCss3, DiMongodb, DiVisualstudio, DiWindows, } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
            <div>
            <DiVisualstudio />
            <h5>Visualstudio</h5>
          </div>
          <div>
            <GiSettingsKnobs />
            <h5>DSA</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <DiWindows />
            <h5>Windows</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra UI</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>

          <div>
            <DiMongodb />
            <h5>
              MongoDB
            </h5>
          </div>

          <div>
            <SiExpress />
            <h5>
               Express
            </h5>
          </div>

          <div>
            <FaNode />
            <h5>
               NodeJs
            </h5>
          </div>

          <div>
            < SiPostman />
            <h5>
                Postman
            </h5>
          </div>

          <div>
            <SiHeroku />
            <h5>
            Heroku
            </h5>
          </div>

          <div>
            <SiCodesandbox/>
            <h5>
             SandBox
            </h5>
          </div>

        </div>
      </div>
    </>
  );
};
