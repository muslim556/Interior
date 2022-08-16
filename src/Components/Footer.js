import React from "react";
import logo from "../Assets/Icons/logo.svg";
export function Footer() {
  return (
    <footer id="footer">
      <div id="footer_card">
        <div id="footer_logo_card">
          <img src={logo} alt="" />
          <p>interior</p>
        </div>
        <p id="join">Join Now For Early Access</p>
        <p id="Suspendisse">
          Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt
          purus nec enim tincidunt, sit
        </p>
        <form id="form">
          <input type="email" placeholder="Enter your email address..." />
          <input type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    </footer>
  );
}
