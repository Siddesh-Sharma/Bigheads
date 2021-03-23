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

        settopics(data.topics);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="DisplayTopic__cards">
        {topics.map((e) => (
          <TopicCards topicName={e.name} subject={topic} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DisplayTopics;
