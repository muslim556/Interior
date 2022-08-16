import React, { useState } from "react";
import logo from "../Assets/Icons/logo.svg";
import search from "../Assets/Icons/search.svg";
import basket from "../Assets/Icons/basket.svg";
import { DrawerTop } from "./Drawertop";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div id="nav_logo">
        <img src={logo} alt="" />
        <p>interior</p>
      </div>
      <div id="nav_link_card">
        <a href="1">Home</a>
        <a href="1">Pages</a>
        <a href="1">Services</a>
        <a href="1">Projects</a>
        <a href="1">Blog</a>
        <a href="1">Contact Us</a>
      </div>
      <div id="nav_img_card">
        <img src={search} alt="" />
        <img src={basket} alt="" />
      </div>
      <btn
        id="nav_btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Menu
      </btn>
      <DrawerTop open={open} setOpen={setOpen} />
    </nav>
  );
}
