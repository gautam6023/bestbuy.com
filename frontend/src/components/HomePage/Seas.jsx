// import React, { Component } from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import "./allcss.css";

const data = [
  {
    seaimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd60e3261c1f642b7/5d0033bc6a96af7017dfe74d/furniture-icon-alloutdoor.jpg?width=250&quality=80&auto=webp",
    title: "Outdoor Living",
  },

  {
    seaimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2a6ba8186f5c2fc8/5effa6b7b52fb75925ee404c/ac-sbc-icon.jpg?width=250&quality=80&auto=webp",
    title: "Cooling and Air Quality",
  },

  {
    seaimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt395270f5843e37fe/626aaf3976b17f2f94786952/sportsandrec-evergreen-category-icon-shop-by-category.jpg?width=250",
    title: "Sports and Recreation",
  },

  {
    seaimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltff769e2ada93c2db/5fa9e4b44e40cf53001f5252/di-evergreen-category-icon-cameras-drones.jpg?width=250&quality=80",
    title: "Cameras, Camcorders, and Drones",
  },

  {
    seaimg:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/134/13497/13497557.jpg",
    title: "Car Tech",
  },

  {
    seaimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2b069a38bfbed6f6/60db8b26a1ff3159b5938622/luggage-evergreen-category-icon-luggage-bags.jpg?width=250&quality=80",
    title: "Travel and Luggage",
  },
];

export default function Seas() {
  // var dataAr=[];
  //   const [seas, setSeas] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8080/seas").then(({ data }) => {
  //       setSeas(data);
  //       console.log(data);
  //     });
  //   }, []);

  return (
    <div className="soffers">
      <h2>Shop this season's essentials</h2>
      <div className="soffersin">
        {data.map((e, i) => (
          <div className="smapHoff" key={i}>
            <a href="/" style={{ textDecoration: "none" }}>
              <div className="simgDiv">
                <img src={e.seaimg} alt="pic" />
              </div>
              <div className="stitletxt">
                <p>{e.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
