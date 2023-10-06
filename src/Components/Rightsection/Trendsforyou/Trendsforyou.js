import React from "react";
import "./Trendsforyou.css";
import Tfucard from "./Tfycard/Tfucard";
import Graytext from "../../Mainsection/Graytext/Graytext";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Trendsforyou = () => {
  return (
    <div>
      <div className="tfycontainer">
        <h3 className="tfyheader">Trends for you</h3>
        {data.map((item, index) => (
          <Tfucard />
        ))}
        <button className="showmorebtn">Show more</button>
      </div>
      <div className="footer">
        <Graytext text=" Terms of policy  privacy policy  cookia policy" />
        <Graytext text=" Accessability  ads policy  more" />
      </div>
    </div>
  );
};

export default Trendsforyou;
