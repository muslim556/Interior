import React, { useState, useEffect } from "react";
import img1 from "../Assets/Images/img1.png";
import leftarrow from "../Assets/Icons/arrow_left.svg";
import rightarrow from "../Assets/Icons/arrow_right.svg";
import img2 from "../Assets/Images/img2.png";
import img3 from "../Assets/Images/img3.png";

export function Section1() {
  const [Products, setProducts] = useState([
    {
      id: "1",
      img: img1,
      name: "New Chair Collection 2022",
      btnName: "SHOP NOW",
    },
    {
      id: "2",
      img: img2,
      name: "Lamp Desk",
      btnName: "SHOP NOW",
    },
    {
      id: "3",
      img: img3,
      name: "Modern Chair Collection 2022",
      btnName: "SHOP NOW",
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
      <section id="sec1">
        <div id="sec1_container">
          <img src={leftarrow} alt="" />
          {Products.map((item) => {
            return (
              <div id="sec1_card" key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => show(item)}>{item.btnName}</button>
                <img src={item.img} alt="" />
              </div>
            );
          })}
          <img src={rightarrow} alt="" />
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
