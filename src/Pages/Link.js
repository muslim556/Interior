import React from "react";
import facebook from "../Assets/Icons/facebook.svg";
import insta from "../Assets/Icons/insta.svg";
import twitter from "../Assets/Icons/twitter.svg";
import linkind from "../Assets/Icons/linkidn.svg";

export function Link() {
  return (
    <div id="link">
      <p>Copyright 2022 - Designed & Developed by Frenify</p>
      <div id="link_card">
        <a href="sa">
          <img src={facebook} alt="" />
        </a>
        <a href="sa">
          <img src={insta} alt="" />
        </a>
        <a href="sa">
          <img src={twitter} alt="" />
        </a>
        <a href="sa">
          <img src={linkind} alt="" />
        </a>
      </div>
    </div>
  );
}
