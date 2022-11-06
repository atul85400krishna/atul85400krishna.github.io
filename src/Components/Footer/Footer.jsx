import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <p className="footer">
             
              <span style={{ color: `red`, background: `transparent` }}>👨‍💻</span>{" "}
              
              <span><p>Copyright © {year} <p>ATUL KRISHNA</p> </p></span>

            </p>
            
          </div>
        </a>
      </div>
    </>
  );
};
