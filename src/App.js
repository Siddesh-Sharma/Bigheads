import React from "react";
import "./App.css";
import Home from "./components/HomeComponents/Home";
import DisplayTopics from "./components/SubjectContent/DisplayTopics";
import { Switch, Route } from "react-router-dom";
import ProvideInput from "./components/ProvideInput/ProvideInput";
import { core } from "./confidential";

import DisplayTopicContent from "./components/TopicContent/DisplayTopicContent";

function App() {
  return (
    <>
      <div className="Master">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          {/* <Route path="editIt" exact component={<ProvideInput />}></Route> */}
          <Route path={`/${core}`} exact component={ProvideInput}></Route>
          <Route
            path="/:subName/:topicName"
            exact
            component={(props) => <DisplayTopicContent {...props} />}
          ></Route>
          <Route
            path="/:subName"
            component={(props) => <DisplayTopics {...props} />}
          ></Route>

          {/* <Route path="/C/underCon" exact component={<Construction />}></Route> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
