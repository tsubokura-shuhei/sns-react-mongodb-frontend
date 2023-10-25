import React from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";

const TimelLine = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default TimelLine;
