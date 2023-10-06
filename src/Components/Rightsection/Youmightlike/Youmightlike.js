import React from "react";
import "./Youmightlike.css";
import Ymlcard from "./Ymlcard/Ymlcard";
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
const Youmightlike = () => {
  return (
    <div className="ymlcontainer">
      <h3 className="ymlheader">You might like</h3>
      {data.map((item, index) => (
        <Ymlcard
          key={index}
          img={item.img}
          name={item.name}
          subname={item.subname}
        />
      ))}
      <button className="showmorebtn">Show more</button>
    </div>
  );
};

export default Youmightlike;
