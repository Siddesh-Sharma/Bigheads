import React from "react";
import Nav from "./Nav";
import SubjectCards from "./SubjectCards";
import "./Home.css";

function Home() {
  return (
    <div>
      <Nav />
      <div className="Home-cards">
        <SubjectCards subName={"MongoDB"} />
        <SubjectCards subName={"Express"} />
      </div>
      <div className="Home-cards">
        <SubjectCards subName={"React"} />
        <SubjectCards subName={"Node"} />
      </div>
    </div>
  );
}

export default Home;
