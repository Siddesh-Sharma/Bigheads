import React from "react";
import { Container, Jumbotron, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Display.css";

export default function Display({
  topicName,
  topicNumber,
  topicContent,
  subjectName,
}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const popover = <Tooltip id="popover-basic">{topicName}</Tooltip>;

  return (
    <div>
      <p>Preview</p>
      <Jumbotron fluid>
        <Container>
          <div className="master-inline">
            <h6>{topicNumber}</h6>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
              <h4>{truncate(topicName, 20)}</h4>
            </OverlayTrigger>
            <p>{subjectName}</p>
          </div>

          <p>{truncate(topicContent, 200)}</p>
          <br />
          <br />
          <br />
        </Container>
      </Jumbotron>
    </div>
  );
}
