import React from "react";
import { Drawer, List, ListItemButton, Divider } from "@mui/material";
import search from "../Assets/Icons/search.svg";
import basket from "../Assets/Icons/basket.svg";
export function DrawerTop({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchor="top"
      id="drawer"
    >
      <List
        style={{
          width: "100%",
          height: "350px",
        }}
      >
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/">Home</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/mywork">Pages</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/sendfeedback">Services</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/sendfeedback">Projects</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/sendfeedback">Blog</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <a href="/sendfeedback">Contact Us</a>
        </ListItemButton>
        <Divider />

        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <img src={search} alt="" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="nav_btn_card"
        >
          <img src={basket} alt=""/>
        </ListItemButton>
      </List>
    </Drawer>
  );
}
