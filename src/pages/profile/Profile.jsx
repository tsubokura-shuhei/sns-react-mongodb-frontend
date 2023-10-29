import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimelLine from "../../components/timeline/TimelLine";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Tsubokura</h4>
              <span className="profileInfoDesc">
                プロフィールの内容が入ります。
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimelLine />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
