import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { id, date, desc, photo, like, comment } = post;
  const [likebox, setLikebox] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikebox(isLiked ? likebox - 1 : likebox + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                PUBLIC_FOLDER +
                Users.filter((user) => user.id === id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === id)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={PUBLIC_FOLDER + photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{likebox}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
