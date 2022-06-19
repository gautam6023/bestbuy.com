import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./allcss.css";

const data = [
  {
    hoffimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3a0283850b2da7f8/629aa35861670f0fb5dd0e87/ht-20220610-offer-hp-ht-onsale-m.jpg?width=1800&quality=80&auto=webp",
    title: "Save up to $300 on select ultra-HD TVs.",
    offt: "Plus, enjoy more deals on select home audio and home theatre accessories.",
    link: "Shop deals >",
  },

  {
    hoffimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt360dc53ebf77defc/627449b48c90c334d0d41486/computing-20220506-offer-computers-and-accessories-4col-m.jpg?width=1800&quality=80&auto=webp",
    title: "Save big on computers and accessories for work and play.",
    offt: " ",
    link: "Shop Now >",
  },

  {
    hoffimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltce40af050d6f9a59/602db6bb2bcd81160ce91b54/heb-20210219-offer-bestbuy-outlet-m-eng.jpg?width=1800&quality=80&auto=webp",
    title: "Explore Best Buy Outlet.",
    offt: "Find incredible deals on open box and Geek Squad Certified Open Box items, and more.",
    link: "Shop Now >",
  },

  {
    hoffimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3a81ac0ec530b4b8/6291049f1a5eff4c4c377440/vg-20220603-offer-play-at-best-buy-top-deals-4col-m.jpg?width=1800&quality=80&auto=webp",
    title:
      "Get deals on video games and gear, plus the latest news on upcoming releases.",
    link: "Shop Now >",
  },
];

export default function Htoff() {
  // var dataAr=[];
  //   const [offs, setOffs] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8080/htoffs").then(({ data }) => {
  //       setOffs(data);
  //       console.log(data);
  //     });
  //   }, []);

  return (
    <div className="hoffers">
      <h2>Our hottest offers</h2>
      <div className="hoffersin">
        {data.map((e, i) => (
          <div className="mapHoff" key={i}>
            <a href="" style={{ textDecoration: "none" }}>
              <div className="imgDiv">
                <img src={e.hoffimg} alt="pic" srcset="" />
              </div>
              <div className="titletxt">
                <p>{e.title}</p>
              </div>
              <div className="tdescript">
                <p>{e.offt}</p>
              </div>
              <a href="">
                <p id="link">{e.link}</p>
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
