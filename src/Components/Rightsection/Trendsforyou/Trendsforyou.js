import React from "react";
import "./Trendsforyou.css";
import TreandsForYouCard from "./TreandsForYouCard/TreandsForYouCard";
import Graytext from "../../Mainsection/Graytext/Graytext";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Trendsforyou = () => {
  return (
    <div>
      <div className="TreandsForYouContainer">
        <h3 className="TreandsForYouHeader">Trends for you</h3>
        {data.map((index) => (
          <TreandsForYouCard key={index} />
        ))}
        <button className="showMoreBtn">Show more</button>
      </div>
      <div className="footer">
        <Graytext text=" Terms of policy  privacy policy  cookia policy" />
        <Graytext text=" Accessability  ads policy  more" />
      </div>
    </div>
  );
};

export default Trendsforyou;
