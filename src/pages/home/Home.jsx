import React from "react";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimelLine from "../../components/timeline/TimelLine";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimelLine />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
