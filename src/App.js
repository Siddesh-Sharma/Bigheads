import React from "react";
import "./App.css";
import Home from "./components/HomeComponents/Home";
import DisplayTopics from "./components/SubjectContent/DisplayTopics";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import db from "./Firebase";

function App() {
  // db.ref().set({
  //   master: {
  //     0: {
  //       SubName: "MongoDB",
  //       NoOfArticals: 2,
  //       topics: {
  //         0: { name: "Intro", content: "ddhdvfudvfd" },
  //         1: { name: "Class", content: "hdbfuhfvdf" },
  //         2: { name: "Functions", content: "sbdbihwoh" },
  //         3: { name: "routing", content: "mm;[ppmm" },
  //       },
  //     },
  //     1: {
  //       SubName: "Express",
  //       NoOfArticals: 0,
  //       topics: {
  //         0: { name: "Intro", content: "ddhdvfudvfd" },
  //         1: { name: "Class", content: "hdbfuhfvdf" },
  //         2: { name: "Functions", content: "sbdbihwoh" },
  //         3: { name: "routing", content: "mm;[ppmm" },
  //       },
  //     },
  //     2: {
  //       SubName: "React",
  //       NoOfArticals: 2,
  //       topics: {
  //         0: { name: "Intro", content: "ddhdvfudvfd" },
  //         1: { name: "Class", content: "hdbfuhfvdf" },
  //         2: { name: "Functions", content: "sbdbihwoh" },
  //         3: { name: "routing", content: "mm;[ppmm" },
  //       },
  //     },
  //     3: {
  //       SubName: "Node",
  //       NoOfArticals: 0,
  //       topics: {
  //         0: { name: "Intro", content: "ddhdvfudvfd" },
  //         1: { name: "Class", content: "hdbfuhfvdf" },
  //         2: { name: "Functions", content: "sbdbihwoh" },
  //         3: { name: "routing", content: "mm;[ppmm" },
  //       },
  //     },
  //   },
  // });

  return (
    <>
      <div className="Master">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route
            path="/:subName"
            component={(props) => <DisplayTopics {...props} />}
          ></Route>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
