import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import TopicCards from "./TopicCards";
import "./DisplayTopics.css";

function DisplayTopics({ match }) {
  let params = match.params;
  console.log(params.slug);

  const react = [
    { topicNumber: "1", topicName: "Intro to react", subject: "React" },
    { topicNumber: "2", topicName: "second", subject: "React" },
    { topicNumber: "3", topicName: "third", subject: "React" },
    { topicNumber: "4", topicName: "fourth", subject: "React" },
    { topicNumber: "5", topicName: "second", subject: "React" },
    { topicNumber: "6", topicName: "third", subject: "React" },
    { topicNumber: "7", topicName: "fourth", subject: "React" },
  ];

  return (
    <div>
      <Nav />
      <div className="DisplayTopic__cards">
        {react.map((e) => (
          <TopicCards
            key={e.topicNumber}
            topicName={e.topicName}
            topicNumber={e.topicNumber}
            subject={e.subject}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DisplayTopics;
