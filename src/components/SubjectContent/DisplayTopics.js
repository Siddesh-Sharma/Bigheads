import React, { useState, useEffect, Component } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import TopicCards from "./TopicCards";
import "./DisplayTopics.css";

import db from "../../Firebase";

function DisplayTopics({ match }) {
  let currentSub = match.params.subName;
  let topic = currentSub;
  const key = { MongoDB: 0, Express: 1, React: 2, Node: 3 };
  var [topics, settopics] = useState([]);

  useEffect(() => {
    db.ref()
      .child("master")
      .child(key[topic])
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        console.log(data.topics);
        settopics(data.topics);
      });
  }, []);

  // console.log(topics);
  // const react = [
  //   {topic: "intro", content: ""},
  //   { topicNumber: "2", topicName: "second", subject: "React" },
  //   { topicNumber: "3", topicName: "third", subject: "React" },
  //   { topicNumber: "4", topicName: "fourth", subject: "React" },
  //   { topicNumber: "5", topicName: "second", subject: "React" },
  //   { topicNumber: "6", topicName: "third", subject: "React" },
  //   { topicNumber: "7", topicName: "fourth", subject: "React" },
  // ];

  topics.map((e) => console.log(e.name));

  return (
    <div>
      <Nav />
      <div className="DisplayTopic__cards">
        {topics.map((e) => (
          <TopicCards topicName={e.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DisplayTopics;
