import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings, Task } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const getIcom = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home></Home>;
    case "SETTINGS":
      return <Settings></Settings>;
    case "TASKS":
      return <Task></Task>;

    default:
      return <Home></Home>;
  }
};

const MenuListItems = ({ list }) => {
  const navigate = useNavigate();

  const nav = (path) => {
    navigate.push(path);
  };

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => nav(path)}>
          <ListItemIcon>{getIcom(icon)}</ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
