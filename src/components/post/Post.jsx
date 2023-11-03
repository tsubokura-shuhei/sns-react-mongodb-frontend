import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import axios from "axios";

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { id, date, desc, photo, like, comment } = post;
  const [likebox, setLikebox] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

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
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {likebox}人がいいねを押しました
            </span>
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
