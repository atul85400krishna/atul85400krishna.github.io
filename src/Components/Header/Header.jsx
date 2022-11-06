import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/S-logo.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
    <div className="fixde">
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src={Image} alt="logo" />
            </span>
          </a>
        </h3>
        <Navbar />
      </header>
      </div>
    </>
  );
};
