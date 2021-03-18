import React from "react";
import { Card } from "react-bootstrap";
import "./SubjectCard.css";
import Lottie from "react-lottie";
import animationData from "./lottie-arrow.json";

function SubjectCards({ subName }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="master">
      <div className="master-card">
        <Card
          style={{
            width: "18rem",
            cursor: "pointer",
            borderBlockColor: "blue",
          }}
        >
          <Card.Body className="master-card-content">
            <Card.Title>{subName}</Card.Title>
            {/* <Card.Text>Bright future</Card.Text> */}
            <Lottie options={defaultOptions} height={30} width={100} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SubjectCards;
