import React from "react";
import leftarrow from "../Assets/Icons/arrow_left.svg";
import rightarrow from "../Assets/Icons/arrow_right.svg";
import img12 from "../Assets/Images/img12.png";
import img13 from "../Assets/Images/img13.png";
import img14 from "../Assets/Images/img14.png";
import user from "../Assets/Icons/user.svg";
import comment from "../Assets/Icons/comment.svg";

export function Section6() {
  return (
    <section id="sec6">
      <div id="sec6_line_card">
        <p id="sec6_line"></p>
        <p>RECENT ARTICLES</p>
        <p id="sec6_line"></p>
      </div>
      <p id="sec6_text">Read Our Latest Articles</p>
      <div id="sec6_cards_container">
        <img src={leftarrow} alt="" />
        <div id="sec6_card">
          <img src={img12} alt="" id="sec6_img"/>
          <div id="sec6_text_card">
            <div id="user_comment_card">
              <div id="user">
                <img src={user} alt="" />
                <span>John Doe</span>
              </div>
              <div id="comment">
                <img src={comment} alt="" />
                <span>9 Comments</span>
              </div>
            </div>
            <p id="things_toknow">
              Things to Know When Choosing the Perfect Sofa
            </p>
            <button id="sec6_btn">See More Product</button>
          </div>
        </div>
        <div id="sec6_card">
          <img src={img13} alt="" />
          <div id="sec6_text_card">
            <div id="user_comment_card">
              <div id="user">
                <img src={user} alt="" />
                <span>John Doe</span>
              </div>
              <div id="comment">
                <img src={comment} alt="" />
                <span>9 Comments</span>
              </div>
            </div>
            <p id="things_toknow">
              Things to Know When Choosing the Perfect Sofa
            </p>
            <button id="sec6_btn">See More Product</button>
          </div>
        </div>
        <div id="sec6_card">
          <img src={img14} alt="" />
          <div id="sec6_text_card">
            <div id="user_comment_card">
              <div id="user">
                <img src={user} alt="" />
                <span>John Doe</span>
              </div>
              <div id="comment">
                <img src={comment} alt="" />
                <span>9 Comments</span>
              </div>
            </div>
            <p id="things_toknow">
              Things to Know When Choosing the Perfect Sofa
            </p>
            <button id="sec6_btn">See More Product</button>
          </div>
        </div>
        <img src={rightarrow} alt="" />
      </div>
    </section>
  );
}
