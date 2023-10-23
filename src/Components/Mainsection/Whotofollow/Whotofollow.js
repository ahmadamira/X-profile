import React from "react";
import "./WhoToFollow.css";
import PersonIcon from "@mui/icons-material/Person";
import Graytext from "../Graytext/Graytext";
import HeadingSubHeading from "../HeadingSubHeading/HeadingSubHeading";
import FollowButton from "../FollowButton/FollowButton";

const WhoToFollow = ({ img, name, subname, followers, text }) => {
  return (
    <div className="followContainer">
      <div className="whoFollows">
        <PersonIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <Graytext text={followers} />
      </div>
      <div className="headingFollow">
        <div className="followBox">
          <img src={img} alt="My Logo" className="followLogo" />
          <HeadingSubHeading heading={name} sub={subname} />
        </div>
        <FollowButton />
      </div>
      <div className="followText">{text}</div>
    </div>
  );
};

export default WhoToFollow;
