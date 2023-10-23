import React from "react";
import "./YouMightLikeCard.css";
import HeadingSubHeading from "../../../Mainsection/HeadingSubHeading/HeadingSubHeading";
import FollowButton from "../../../Mainsection/FollowButton/FollowButton";

const YouMightLikeCard = ({ img, name, subname }) => {
  return (
    <div className="youMightLikeCardContainer">
      <div className="ymlBox">
        <img src={img} alt="My Logo" className="youMightLikeLogo" />
        <HeadingSubHeading heading={name} sub={subname} />
      </div>
      <FollowButton />
    </div>
  );
};

export default YouMightLikeCard;
