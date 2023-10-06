import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Post.css";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Graytext from "../Graytext/Graytext";
const Post = () => {
  return (
    <div>
      <div className="postContainer">
        <div className="flexdiv">
          <img src="/imgs/myimg.jpg" alt="My Logo" className="postOwnerphoto" />
          <div className="postName">
            <div className="postOwner">
              <spam>Ahmad Amira</spam>
              <Graytext text="@ahmad-amira.May 26" />
            </div>
            <p className="postContent">Happy 10th birthday to @Reactjs</p>
          </div>
        </div>
        <MoreHorizIcon sx={{ height: "auto" }} />
      </div>
      <div className="postButtons">
        <ModeCommentIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <SwapCallsIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <FavoriteBorderIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <DriveFolderUploadIcon sx={{ color: "rgb(95, 94, 94)" }} />
      </div>
    </div>
  );
};

export default Post;
