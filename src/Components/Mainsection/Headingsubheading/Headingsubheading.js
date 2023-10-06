import React from "react";
import "./Headingsubheading.css";
const Headingsubheading = ({ heading, sub }) => {
  return (
    <div className="headingcontainer">
      <spam>{heading}</spam>
      <p className="subHeading">{sub}</p>
    </div>
  );
};

export default Headingsubheading;
