import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Headingsubheading from "./Headingsubheading/Headingsubheading";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import "./Mainsection.css";
import Graytext from "./Graytext/Graytext";
import Post from "./Post/Post";
import Whotofollow from "./Whotofollow/Whotofollow";
const data = [
  {
    img: "/imgs/freecodecamp.jpg",
    name: "freeCodeCamp.org ",
    subname: "@freeCodeCamp",
    followers: "Nodejs and 9 others follow",
    text: " We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn.",
  },
  {
    img: "/imgs/typescript.png",
    name: "TypeScript",
    subname: "@Typescript",
    followers: "Nodejsand 5 others follow",
    text: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    img: "/imgs/TailWindCSS.png",
    name: "TailWind CSS",
    subname: "@TailWindCSS",
    followers: "AhmadAmira and 3 others follow",
    text: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
  },
];
const Mainsection = () => {
  return (
    <div className="mainsectionContainer">
      <div className="header">
        <ArrowBackIcon
          sx={{ color: "white", height: "auto", marginRight: "30px" }}
        />
        <Headingsubheading heading="React" sub="2,611 posts" />
      </div>
      <img
        src="/imgs/feature-react.webp"
        alt="My Logo"
        className="prophilephoto"
      />
      <img src="/imgs/react.png" alt="My Logo" className="reactimg" />
      <div className="belowHero">
        <div className="btnDiv">
          <button className="navButtonicon">
            <MoreHorizIcon />
          </button>
          <button className="navButtonicon">
            <NotificationAddIcon />
          </button>
          <button className="navButtonfollow">Following</button>
        </div>
        <Headingsubheading heading="React" sub="@Reactjs" />
        <p>The library for web and native user interfaces</p>
        <div className="linkanddate">
          <InsertLinkIcon
            sx={{ color: "rgb(95, 94, 94)", marginRight: "5px" }}
          />
          <span className="reactlink">react.dev</span>
          <CalendarMonthIcon
            sx={{ color: "rgb(95, 94, 94)", marginLeft: "25px" }}
          />
          <Graytext text=" Joined July 2013" />
        </div>
        <div className="linkanddate">
          267
          <Graytext text="Following" />
          <span className="followers">708.1k</span>
          <Graytext text="Followers" />
        </div>
        <Graytext text="Followed by Kareem Kukhun ,Ahmad Amira and 14 other." />
        <div className="navication">
          <button className="postsButton">Posts</button>
          <button className="navButton">Replies</button>
          <button className="navButton">Media</button>
          <button className="navButton"> Links</button>
        </div>
        <hr />
        <Post />
        <hr />
        <h3>Who to follow</h3>
        {data.map((item, index) => (
          <Whotofollow
            key={index}
            img={item.img}
            name={item.name}
            subname={item.subname}
            followers={item.followers}
            text={item.text}
          />
        ))}
        <button className="showmorebtn">Show more</button>
        <hr />
      </div>
    </div>
  );
};

export default Mainsection;
