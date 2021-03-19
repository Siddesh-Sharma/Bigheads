import React from "react";
import Nav from "../Nav";
import SubjectCards from "./SubjectCards";
import "./Home.css";
import Footer from "../Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>:Sub</Breadcrumb.Item>
          <Breadcrumb.Item>:Topic</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* <div>
        <Breadcrumb bsPrefix="bread">
          <Breadcrumb.Item bsPrefix="spacing">home</Breadcrumb.Item>
          <Breadcrumb.Item bsPrefix="spacing">topic</Breadcrumb.Item>
          <Breadcrumb.Item bsPrefix="spacing">sub</Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
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
