import React from "react";
import Graytext from "../../../Mainsection/Graytext/Graytext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Headingsubheading from "../../../Mainsection/Headingsubheading/Headingsubheading";
import "./Tfucard.css";
const Tfucard = () => {
  return (
    <div className="Tfrcardcontainer">
      <div className="tfyheader">
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

export default Tfucard;
