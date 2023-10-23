import React from "react";
import "./LeftSidebar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OptionsBar from "./OptionsBar/OptionsBar";

const LeftSidebar = () => {
  return (
    <div className="leftContainer">
      <img src="/imgs/Vector.png" alt="My Logo" className="logo" />
      <OptionsBar />
      <button className="postButton">Post</button>
      <div className="chatBox">
        <img src="/imgs/myimg.jpg" alt="My Logo" className="profileLogo" />
        <div className="nameContainer">
          <spam>Ahmad Amira</spam>
          <p className="subName">Ahmad Amira</p>
        </div>
        <MoreHorizIcon sx={{ height: "auto", marginLeft: "25%" }} />
      </div>
    </div>
  );
};

export default LeftSidebar;
