import React from "react";
import "./Option.css";

const Option = ({ icon, name }) => {
  return (
    <div className="optionContainer">
      {icon}
      <button className="title">{name}</button>
    </div>
  );
};

export default Option;
