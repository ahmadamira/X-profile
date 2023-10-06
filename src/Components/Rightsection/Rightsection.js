import React from "react";
import "./Rightsection.css";
import SearchIcon from "@mui/icons-material/Search";
import Youmightlike from "./Youmightlike/Youmightlike";
import Trendsforyou from "./Trendsforyou/Trendsforyou";
const Rightsection = () => {
  return (
    <div className="rightsectioncontainer">
      <div className="search-bar">
        <button className="search-button">
          <SearchIcon sx={{ color: "rgb(95, 94, 94)" }} />
        </button>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <Youmightlike />
      <Trendsforyou />
    </div>
  );
};

export default Rightsection;
