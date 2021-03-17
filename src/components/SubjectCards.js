import React from "react";
import { Card } from "react-bootstrap";
import "./SubjectCard.css";

function SubjectCards({ subName }) {
  return (
    <div className="master">
      <div className="master-card">
        <Card
          style={{
            width: "18rem",
            cursor: "pointer",
            borderBlockColor: "green",
          }}
        >
          <Card.Body>
            <Card.Title>{subName}</Card.Title>
            {/* <Card.Text>Bright future</Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SubjectCards;
