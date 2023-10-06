import React from "react";
import "./Ymlcard.css";
import Headingsubheading from "../../../Mainsection/Headingsubheading/Headingsubheading";
import Followbutton from "../../../Mainsection/Followbutton/Followbutton";
const Ymlcard = ({ img, name, subname }) => {
  return (
    <div className="Ymlcardcontainer">
      <div className="ymlBox">
        <img src={img} alt="My Logo" className="ymllogo" />
        <Headingsubheading heading={name} sub={subname} />
      </div>
      <Followbutton />
    </div>
  );
};

export default Ymlcard;
