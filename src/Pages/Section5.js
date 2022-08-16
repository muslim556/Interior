import React from "react";
import shipping from "../Assets/Icons/shipping.svg";
import returnfree from "../Assets/Icons/return.svg";
import secure from "../Assets/Icons/secure.svg";
import price from "../Assets/Icons/price.svg";

export function Section5() {
  return (
    <section id="sec5">
      <div id="sec5_container">
        <div id="sec5_card">
          <img src={shipping} alt="" />
          <div id="sec5_card_text">
            <p>Free Shipping</p>
            <p>Capped at $319 per order</p>
          </div>
          <span id="sec5_line"></span>
        </div>
        <div id="sec5_card">
          <img src={returnfree} alt="" />
          <div id="sec5_card_text">
            <p>Free Returns</p>
            <p>Within 25 Days</p>
          </div>
          <span id="sec5_line"></span>
        </div>
        <div id="sec5_card">
          <img src={secure} alt="" />
          <div id="sec5_card_text">
            <p>100% Secure</p>
            <p>100% Secure payment</p>
          </div>
          <span id="sec5_line"></span>
        </div>
        <div id="sec5_card">
          <img src={price} alt="" />
          <div id="sec5_card_text">
            <p>Best Price</p>
            <p>Guaranteed Gifts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
