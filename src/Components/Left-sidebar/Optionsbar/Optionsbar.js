import React from "react";
import Option from "../Option/Option";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import MoreIcon from "@mui/icons-material/More";
import "./OptionBar.css";

const optionsData = [
  {
    icon: <HomeIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "Home",
  },
  {
    icon: <SearchIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "Explore",
  },
  {
    icon: (
      <NotificationsNoneIcon
        sx={{ color: "rgb(226, 223, 223)", height: "auto" }}
      />
    ),
    name: "Notification",
  },
  {
    icon: (
      <MailOutlineIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />
    ),
    name: "Messages",
  },
  {
    icon: <ListAltIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "Lists",
  },
  {
    icon: (
      <BookmarkBorderIcon
        sx={{ color: "rgb(226, 223, 223)", height: "auto" }}
      />
    ),
    name: "Bookmarks",
  },
  {
    icon: <PeopleIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "Communities",
  },
  {
    icon: <PersonIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "Profile",
  },
  {
    icon: <MoreIcon sx={{ color: "rgb(226, 223, 223)", height: "auto" }} />,
    name: "More",
  },
];
const OptionsBar = () => {
  return (
    <div className="optionBarContainer">
      {optionsData.map((option, index) => (
        <Option key={index} icon={option.icon} name={option.name} />
      ))}
    </div>
  );
};

export default OptionsBar;
