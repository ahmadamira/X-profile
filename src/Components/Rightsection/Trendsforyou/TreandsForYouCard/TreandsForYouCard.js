import React from "react";
import Graytext from "../../../Mainsection/Graytext/Graytext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./TreandsForYouCard.css";

const TreandsForYouCard = () => {
  return (
    <div className="treandsForYouContainer">
      <div className="treandsForYouHeader">
        <div>
          <Graytext text="Gaming Trending" />
          <span>VALORANT champions</span>
          <Graytext text="27.9k posts" />
        </div>
        <MoreHorizIcon sx={{ color: "rgb(95, 94, 94)" }} />
      </div>
    </div>
  );
};

export default TreandsForYouCard;
