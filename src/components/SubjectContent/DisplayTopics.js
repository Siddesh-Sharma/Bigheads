import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import TopicCards from "./TopicCards";
import "./DisplayTopics.css";
import userContext from "../../Context";
import db from "../../Firebase";

function DisplayTopics({ match }) {
  let currentSub = match.params.subName;
  let topic = currentSub;
  const key = { MongoDB: 0, Express: 1, React: 2, Node: 3 };
  const [topics, settopics] = useState();

  // var ref = db
  //   .ref()
  //   .child("master")
  //   .child(key[topic])
  //   .on(
  //     "value",
  //     function (snapshot) {
  //       console.log(snapshot.val()); //overwrite context variable
  //     },
  //     function (error) {
  //       console.log("Error: " + error.code);
  //     }
  //   );
  // useEffect(() => {
  //   var ref = db
  //     .ref()
  //     .child("master/" + key[topic])

  //     .on(
  //       "value",
  //       function (snapshot) {
  //         console.log(snapshot.val()); //overwrite context variable
  //         const obj = snapshot.val();
  //         const arrData = [];
  //         // console.log("2nd" + obj.topics);
  //         Object.values(obj.topics).forEach((e) =>
  //           arrData.push({ title: e.name, date: e.content })
  //         );
  //         settopics(arrData);
  //       },
  //       function (error) {
  //         console.log("Error: " + error.code);
  //       }
  //     );
  //   return (error) => {
  //     console.log(error);
  //   };
  // }, [topics]);

  console.log(topics);

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
