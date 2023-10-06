import React from "react";
import "./Whotofollow.css";
import PersonIcon from "@mui/icons-material/Person";
import Graytext from "../Graytext/Graytext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Headingsubheading from "../Headingsubheading/Headingsubheading";
import Followbutton from "../Followbutton/Followbutton";

const Whotofollow = ({ img, name, subname, followers, text }) => {
  return (
    <div className="followContainer">
      <div className="whofollows">
        <PersonIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <Graytext text={followers} />
      </div>
      <div className="headingfollow">
        <div className="followBox">
          <img src={img} alt="My Logo" className="followlogo" />
          <Headingsubheading heading={name} sub={subname} />
        </div>
        <Followbutton />
      </div>
      <div className="followText">{text}</div>
    </div>
  );
};

export default Whotofollow;
