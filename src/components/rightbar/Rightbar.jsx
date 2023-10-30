import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

const Rightbar = ({ profile }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="startImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="assets/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンライの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src="assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">会社</p>
      </>
    );
  };

  const ProfileGirghtbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <div className="rightbarInfokey">出身：</div>
            <div className="righttbarInfokey">福岡</div>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="tightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tsubokura</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tsubokura</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tsubokura</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tsubokura</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileGirghtbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
