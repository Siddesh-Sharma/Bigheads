import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./SubjectCard.css";
import Lottie from "react-lottie";
import animationData from "./lottie-arrow.json";
import { useHistory, useParams } from "react-router-dom";
import firebase from "firebase";
import db from "../../Firebase";

// url = "loclahoash:300/react";
// endpoint = react;

function SubjectCards({ subName }) {
  const history = useHistory();

  let handleClick = (e) => {
    console.log(e);

    history.push(`${e}`);
  };

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
          onClick={() => handleClick(subName)}
        >
          <Card.Body className="master-card-content">
            <Card.Title>{subName}</Card.Title>

            <Lottie options={defaultOptions} height={30} width={100} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SubjectCards;
