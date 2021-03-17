import React from "react";
import Nav from "./Nav";
import SubjectCards from "./SubjectCards";
import "./Home.css";

function Home() {
  return (
    <div>
      <Nav />
      <div className="Home-cards">
        <SubjectCards />
        <SubjectCards />
      </div>
      <div className="Home-cards">
        <SubjectCards />
        <SubjectCards />
      </div>
    </div>
  );
}

export default Home;
