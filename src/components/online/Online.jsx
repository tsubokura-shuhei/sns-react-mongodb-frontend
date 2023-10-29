import React from "react";

function Online({ user }) {
  const { profilePicture, username } = user;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <soan className="rightbarUserName">{username}</soan>
    </li>
  );
}

export default Online;
