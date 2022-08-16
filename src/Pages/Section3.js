import React, { useState, useEffect } from "react";
import star from "../Assets/Icons/star.svg";
import bessie from "../Assets/Images/Bessie Cooper.png";
import anjelina from "../Assets/Images/Anjelina Jolie.png";
import brooklyn from "../Assets/Images/Brooklyn Simmons.png";
import bessie2 from "../Assets/Images/Bessie Cooper (2).png";
// import {Drawer, List, ListItem, ListItemButton} from "@mui/material"

export function Section3() {
  const [Users, setUsers] = useState([
    {
      id: 1,
      img: bessie,
      name: "Bessie Cooper",
      job: "Communications Director",
      star: star,
      value: "4.0",
      comment:
        "I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi",
    },
    {
      id: 2,
      img: anjelina,
      name: "Anjelina Jolie",
      job: "Sales Manager",
      star: star,
      value: "4.0",
      comment:
        "I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi",
    },
    {
      id: 3,
      img: brooklyn,
      name: "Brooklyn Simmons",
      job: "Public Relations Specialist",
      star: star,
      value: "4.0",
      comment:
        "I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi",
    },
    {
      id: 4,
      img: bessie2,
      name: "Bessie Cooper",
      job: "Communications Director",
      star: star,
      value: "4.0",
      comment:
        "I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi",
    },
  ]);

  const [showData, setShowData] = useState({});
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const show = (item) => {
    openModal();
    setShowData(item);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target.className);
      if (e.target.className === "modal activ") {
        setModal(false);
        // console.log("ss");
      }
    });
  }, []);

  return (
    <>
      <section id="sec3">
        <div id="sec3_text_container">
          <div id="sec3_text">
            <span></span>
            <p>WHAT PEOPLE SAY</p>
            <span></span>
          </div>
          <p>Words Of Our Clients</p>
        </div>
        <div id="sec3_users_container">
          {Users.map((item) => {
            return (
              <div id="user_card" key={item.id}>
                <div id="sec3_img">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
                <p>{item.job}</p>
                <div id="star_card">
                  <img src={item.star} alt="" />
                  <span>{item.value}</span>
                </div>
                <span id="line"></span>
                <p id="sec3_user_text">{item.comment}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className={modal ? "modal activ" : "modal"}>
        <div id="sec1_card_modal">
          <img src={showData.img} alt="" />
        </div>
      </div>
    </>
  );
}
