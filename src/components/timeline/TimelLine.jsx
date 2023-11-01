import React, { useEffect, useState } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";

const TimelLine = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/652b82adc63146806ccac221"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default TimelLine;
