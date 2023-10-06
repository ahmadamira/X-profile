import React from "react";
import "./Leftsidebar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Optionsbar from "./Optionsbar/Optionsbar";
const Leftsidebar = () => {
  return (
    <div className="leftContainer">
      <img src="/imgs/Vector.png" alt="My Logo" className="logo" />
      <Optionsbar />
      <button className="postButton">Post</button>
      <div className="chatBox">
        <img src="/imgs/myimg.jpg" alt="My Logo" className="profilelogo" />
        <div className="nameContainer">
          <spam>Ahmad Amira</spam>
          <p className="subName">Ahmad Amira</p>
        </div>
        <MoreHorizIcon sx={{ height: "auto", marginLeft: "25%" }} />
      </div>
    </div>
  );
};

export default Leftsidebar;
