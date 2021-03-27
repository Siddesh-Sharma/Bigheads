import React, { useEffect, useState } from "react";
import db from "../../Firebase";
import "./DisplayTopicContent.css";
import Nav from "../Nav";

export default function DisplayTopicContent({ match }) {
  const key = { MongoDB: 0, Express: 1, React: 2, Node: 3 };
  let topic = match.params.subName;
  const [content, setcontent] = useState();
  const [display, setdisplay] = useState();

  useEffect(() => {
    db.ref()
      .child("master")
      .child(key[topic])
      .once("value")
      .then((snapshot) => {
        setcontent(snapshot.val().topics);
      });
  }, []);

  // //console.log(match.params.topicName);
  //piece of art by Mayank
  if (content) {
    const matchTopic = match.params.topicName;
    var contentDisplay = null;

    for (let i = 0; i < content.length; i++) {
      var contentTemp = JSON.stringify(content[i]);
      var tp = JSON.parse(contentTemp);
      var abc = JSON.stringify(tp);
      abc = JSON.parse(abc);

      if (abc.name === matchTopic) {
        contentDisplay = abc.content;
        //setdisplay(abc.content);

        //content = false;
        break;
      }
    }
  }

  // function truncate(string, n) {
  //   if (string) {
  //     if (string.length === 0) return;

  //     return <p>{string.substr(0, n - 1)}</p>;
  //     //console.log(string.substr(0, n - 1));
  //   }
  //   if (string && string.substr(n - 1) > 0) {
  //     truncate(string.substr(n - 1), n);
  //   }
  // }

  return (
    <div className="master">
      <div>
        <Nav />
      </div>

      <div className="master-title">
        <h1>{match.params.topicName}</h1>
      </div>
      <div className="master-para">
        <br />

        <p>{contentDisplay}</p>
      </div>
    </div>
  );
}
