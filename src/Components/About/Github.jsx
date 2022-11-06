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
    </Row>
  );
}

export default Github;

