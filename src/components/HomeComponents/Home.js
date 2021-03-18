import React from "react";
import Nav from "../Nav";
import SubjectCards from "./SubjectCards";
import "./Home.css";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Nav />
      <div className="Home-title">
        <h2>Learn MERN</h2>
      </div>
      <div className="Home-cards">
        <SubjectCards subName={"MongoDB"} />
        <SubjectCards subName={"Express"} />
      </div>
      <div className="Home-cards">
        <SubjectCards subName={"React"} />
        <SubjectCards subName={"Node"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
