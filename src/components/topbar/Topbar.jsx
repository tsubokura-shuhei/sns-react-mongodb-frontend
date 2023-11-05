import React, { useContext } from "react";
import { Chat, Notifications, Search } from "@mui/icons-material";
import "./Topbar.css";
import { Link } from "react-router-dom";

import { AuthContext } from "../../state/AuthContext";

const Topbar = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SNS App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input type="text" className="searchInput" placeholder="検索" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topImage"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
