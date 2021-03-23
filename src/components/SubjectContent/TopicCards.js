import React from "react";
import { Button, Card } from "react-bootstrap";
import "./TopicCards.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import DisplayTopicContent from "../TopicContent/DisplayTopicContent";

function TopicCards({ topicName, topicNumber, subject, state }) {
  const history = useHistory();
  const location = useLocation();
  const handeClick = (e) => {
    history.push(`${location.pathname}/${e}`);
  };

  return (
    <div className="TopicCards">
      <div className="TopicCards__cards">
        <Card
          style={{
            width: "15rem",
            cursor: "pointer",
            borderBlockColor: "blue",
            hover: "disable",
          }}
          className="TopicCards__cardsCard"
          onClick={() => handeClick(topicName)}
        >
          <Card.Body className="master-card-content">
            <Card.Title>{topicName}</Card.Title>
            <Card.Text style={{ height: "2px" }}>{subject}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TopicCards;
