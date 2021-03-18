import React from "react";
import { Card } from "react-bootstrap";
import "./TopicCards.css";

function TopicCards({ topicName, topicNumber, subject }) {
  return (
    <div className="TopicCards">
      <div className="TopicCards__cards">
        <Card
          style={{
            width: "15rem",
            cursor: "pointer",
            borderBlockColor: "blue",
          }}
          className="TopicCards__cardsCard"
        >
          <Card.Body className="master-card-content">
            <Card.Title>{topicName}</Card.Title>
            <Card.Text>{subject}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TopicCards;
