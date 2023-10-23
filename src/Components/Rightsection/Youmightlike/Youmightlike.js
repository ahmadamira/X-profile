import React from "react";
import "./YouMightLike.css";
import YouMightLikeCard from "./YouMightLikeCard/YouMightLikeCard";
const data = [
  {
    img: "/imgs/freecodecamp.jpg",
    name: "freeCodeCamp.org ",
    subname: "@freeCodeCamp",
  },
  {
    img: "/imgs/typescript.png",
    name: "TypeScript",
    subname: "@Typescript",
  },
  {
    img: "/imgs/TailWindCSS.png",
    name: "TailWind CSS",
    subname: "@TailWindCSS",
  },
];

const YouMightLike = () => {
  return (
    <div className="youMightLikeContainer">
      <h3 className="youMightLikeHeader">You might like</h3>
      {data.map((item, index) => (
        <YouMightLikeCard
          key={index}
          img={item.img}
          name={item.name}
          subname={item.subname}
        />
      ))}
      <button className="showMoreBtn">Show more</button>
    </div>
  );
};

export default YouMightLike;
