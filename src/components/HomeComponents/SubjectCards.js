import React from "react";
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
  let topic = "abc";

  const key = { MongoDB: 0, Express: 1, React: 2, Node: 3 };

  // const params = useParams();
  // console.log(params);

  const history = useHistory();

  let handleClick = (e) => {
    history.push(`${e}`);
    topic = e;

    //Get Request
    var ref = db.ref();
    ref
      .child("master")
      .child(key[topic])
      .on(
        "value",
        function (snapshot) {
          console.log(snapshot.val()); //overwrite context variable
        },
        function (error) {
          console.log("Error: " + error.code);
        }
      );
    //console.log("topic is " + topic);
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
            {/* <Card.Text>Bright future</Card.Text> */}
            <Lottie options={defaultOptions} height={30} width={100} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SubjectCards;
