import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Display from "./Display";
import "./ProvideInput.css";
import Nav from "../Nav";

import db from "../../Firebase";

export default function ProvideInput() {
  const [data, setdata] = useState({ name: " ", content: " " });
  const [Sub, setSub] = useState("MongoDB");
  const [topicNumber, settopicNumber] = useState();
  const [topicName, settopicName] = useState();
  const [content, setcontent] = useState();
  const [flag, setflag] = useState(false);

  //db varaiables
  const key = { MongoDB: 0, Express: 1, React: 2, Node: 3 };
  const [temp, settemp] = useState();
  const [raw, setraw] = useState();

  const handleSubSubmit = (value) => {
    setSub(value.target.value);
  };

  const handleTopicNumber = (value) => {
    const temp = parseInt(value.target.value);
    if (!temp) {
      alert("Invalid topic number  " + value.target.value);
      settopicNumber();
    } else {
      settopicNumber(value.target.value);
    }
  };

  const handleTopicChange = (value) => {
    setdata({ topicName: value.target.value });
    settopicName(value.target.value);
  };

  const handleContentChange = (value) => {
    setcontent(value.target.value);
  };

  //handeling database push
  function handleClick(e) {
    e.preventDefault();

    const elon = db.ref().child("master").child(key[Sub]).child("topics");

    elon.once("value").then((snapshot) => {
      setraw(snapshot.val());
      //console.log(snapshot.val().topics);
      if (raw) {
        raw.push({ name: topicName, content: content });
        console.log("updated raw", raw);
        elon.set(raw, console.log("data uploading completed"));
      }
    });
  }

  return (
    <div>
      <Nav />

      <div className="master">
        <div className="master-child-1">
          <Form>
            <Form.Group controlId="in1">
              <Form.Label>Input Provider</Form.Label>
              <br />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Sub:</Form.Label>
                <Form.Control
                  as="select"
                  value={Sub}
                  onChange={handleSubSubmit}
                >
                  <option>MongoDB</option>
                  <option>Express</option>
                  <option>React</option>
                  <option>Node</option>
                </Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="in2">
                <Form.Label>Topic Number</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleTopicNumber}
                  value={topicNumber}
                />
              </Form.Group>

              <br />
              <Form.Group controlId="in3">
                <Form.Label>Topic Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleTopicChange}
                  value={topicName}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="in4" className="contentForm">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleContentChange}
                  value={content}
                  as="textarea"
                />
              </Form.Group>
            </Form.Group>
            <Button
              type="submit"
              className="mb-2"
              onClick={(e) => handleClick(e)}
            >
              Submit
            </Button>
          </Form>
        </div>

        <div className="master-child-2">
          <Display
            topicName={topicName}
            topicNumber={topicNumber}
            topicContent={content}
            subjectName={Sub}
          />
        </div>
      </div>
      <div>
        {/* {flag ? (
          <UpdateInput
            sub={Sub}
            name={topicName}
            content={content}
            flag={flag}
          />
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}
