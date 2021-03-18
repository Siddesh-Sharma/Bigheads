import React from "react";
import "./App.css";
import Home from "./components/HomeComponents/Home";
import DisplayTopics from "./components/SubjectContent/DisplayTopics";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/topic" component={DisplayTopics}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
