import React from "react";
import "./Graytext.css";

const Graytext = ({ text }) => {
  return (
    <div>
      <span className="gray">{text}</span>
    </div>
  );
};

export default Graytext;
