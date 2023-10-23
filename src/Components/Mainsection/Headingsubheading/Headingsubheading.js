import React from "react";
import "./HeadingSubHeading.css";

const HeadingSubHeading = ({ heading, sub }) => {
  return (
    <div className="headingContainer">
      <spam>{heading}</spam>
      <p className="subHeading">{sub}</p>
    </div>
  );
};

export default HeadingSubHeading;
