import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row  style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px", margin:"auto"}}>
        Days I <strong className="different">Code</strong>
         </h2>
      <GitHubCalendar
        username="atul85400krishna"
        blockSize={15}
        blockMargin={10}
        color="green"
        fontSize={18}
        
      />
      <div >
     <iframe style={{display:"block",margin:"auto"}} src="https://github-readme-stats.vercel.app/api?username=atul85400krishna&show_icons=true&theme=dark&title_color=FDA117&text_color=F2E9DB" frameborder="10"></iframe>
     < iframe style={{display:"block",margin:"auto"}} src="https://streak-stats.demolab.com?user=atul85400krishna&theme=dark" alt="" />
     
     </div>
    
    </Row>
  );
}

export default Github;

