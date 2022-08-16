import React, { useState, useEffect } from "react";
import img4 from "../Assets/Images/img4.png";
import img5 from "../Assets/Images/img5.png";
import img6 from "../Assets/Images/img6.png";
import img7 from "../Assets/Images/img7.png";
import img8 from "../Assets/Images/img8.png";
import img9 from "../Assets/Images/img9.png";
import img10 from "../Assets/Images/img10.png";
import img11 from "../Assets/Images/img11.png";
import reset from "../Assets/Icons/reset.svg";
import like from "../Assets/Icons/like.svg";
import shop from "../Assets/Icons/shop.svg";
import { Rating } from "@mui/material";
import { DrawerLeft } from "../Components/Drawer";

export function Section2() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const [Products, setProducts] = useState([
    {
      id: 1,
      img: img4,
      reset: reset,
      like: like,
      shop: shop,
      name: "Blue chair",
      sprice: "$20.00",
      price: "$15.00",
    },
    {
      id: 2,
      img: img5,
      reset: reset,
      like: like,
      shop: shop,
      name: "Blue chair",
      sprice: "$10.00",
      price: "$12.00",
    },
    {
      id: 3,
      img: img6,
      reset: reset,
      like: like,
      shop: shop,
      name: "Coral vase",
      sprice: "",
      price: "$15.00",
    },
    {
      id: 4,
      img: img7,
      reset: reset,
      like: like,
      shop: shop,
      name: "Coffe table set",
      sprice: "",
      price: "$15.00",
    },
    {
      id: 5,
      img: img8,
      reset: reset,
      like: like,
      shop: shop,
      name: "Decorative vase",
      sprice: "",
      price: "$25.00",
    },
    {
      id: 6,
      img: img9,
      reset: reset,
      like: like,
      shop: shop,
      name: "Coral vase",
      sprice: "$20.00",
      price: "$12.00",
    },
    {
      id: 7,
      img: img10,
      reset: reset,
      like: like,
      shop: shop,
      name: "Gray sofa",
      sprice: "$20.00",
      price: "$15.00",
    },
    {
      id: 8,
      img: img11,
      reset: reset,
      like: like,
      shop: shop,
      name: "Gray sofa",
      sprice: "$20.00",
      price: "$15.00",
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
        console.log(setProducts);
      }
    });
  }, []);

  return (
    <>
      <section id="sec2">
        <div id="professional_team">
          <span></span>
          <span>PROFESSIONAL TEAM</span>
        </div>
        <div id="sec2_btns_container">
          <p>The Best New Arrivals</p>
          <div id="sec2_btns">
            <button>Desk</button>
            <button>Bedroom</button>
            <button>Lighting</button>
            <button>Accessories</button>
          </div>
          <button
            id="sec2_btn"
            onClick={() => {
              setOpen(true);
            }}
          >
            Menu
          </button>
        </div>
        <div id="sec2_cards_container">
          {Products.map((item) => {
            return (
              <div id="sec2_mini_cards" key={item.id}>
                <div id="img4">
                  <img src={item.img} alt="" onClick={() => show(item)} />
                </div>
                <div id="sec2_card_icons">
                  <img src={item.reset} alt="" />
                  <img src={item.like} alt="" />
                  <img src={item.shop} alt="" />
                </div>
                <p id="text">{item.name}</p>
                <div id="sec2_card_footer">
                  <s id="sprice">{item.sprice}</s>
                  <span>{item.price}</span>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className={modal ? "modal activ" : "modal"}>
        <div
          id="sec2_mini_cards"
          key={showData.id}
          style={{
            width: "300px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            marginTop: "30px",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          <div id="img4">
            <img src={showData.img} alt="" />
          </div>
          <p id="text">{showData.name}</p>
          <div id="sec2_card_footer">
            <s>{showData.sprice}</s>
            <span>{showData.price}</span>
          </div>
        </div>
        <DrawerLeft open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
