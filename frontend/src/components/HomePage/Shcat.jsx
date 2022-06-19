import { useState, useEffect } from "react";
import axios from "axios";
import "./allcss.css";
import React from "react";

const data = [
  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt100fc1a0ee5fdd12/5d23bb6f8d27ea11c3822271/ht-20190712-homepage-ht-shopby.jpg?width=250&quality=80&auto=webp",
    title: "TVs, Home Theatre, and Accessories",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltad02379eb78e9028/5e28a49463d1b6503160ee40/computing-evergreen-category-icon-laptops.jpg?width=250&quality=80&auto=webp",
    title: "Computers, Tablets, and Accessories",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7682f947ff1c0cd3/5f9749ff67a7c35492602290/smart-home-icon.jpg?width=250&quality=80&auto=webp",
    title: "Smart Home",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9450d10d80be158b/6192ea614eed0e4a24dca596/homepage-shopbycategory-pa-on-sale.jpg?width=250&quality=80&auto=webp",
    title: "Headphones and Portable Speakers",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt819b5f45dd06be17/6025c7884b8030688c37d8bd/bbym-20210212-icon-cellphone-accessories.jpg?width=250&quality=80&auto=webp",
    title: "Cell Phones and Accessories",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltebba6ba1bd154354/5ee2c83e0f079e4334fd6c74/majorapps-icon.jpg?width=250&quality=80&auto=webp",
    title: "Major Appliances",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2f9307f50e7b9ad0/5f7b8d08879de80eb41b07e9/mixers-icon.jpg?width=250&quality=80&auto=webp",
    title: "Small Kitchen Appliances",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt781fd15a5b1c8dbb/611bd84725695f14a34d829a/13817625_5.jpg?width=250&quality=80&auto=webp",
    title: "Video Games, Consoles, and Accessories",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4cddcbaa288413ec/5f5a7640c0eb1d4aeabe8f7f/14882490.jpg?width=250&quality=80&auto=webp",
    title: "Wearable Technology",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77b27294b5c07f31/5d9f83ee0767ca0e800b06fa/computing-evergreen-icon-pc-gaming.jpg?width=250&quality=80&auto=webp",
    title: "PC Gaming",
  },

  {
    shpimg:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/146/14679/14679772.jpg",
    title: "Health and Fitness",
  },

  {
    shpimg:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2705e457feb84d61/62059060214fe9266428d3e4/vacuums-sbc-icon-12370687.jpeg?width=250&quality=80&auto=webp",
    title: "Vacuums",
  },
];

export default function Shcat() {
  //   const [seas, setSeas] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8080/shopcat").then(({ data }) => {
  //       setSeas(data);
  //       console.log(data);
  //     });
  //   }, []);

  return (
    <div className="scoffers">
      <h2>Shop by category</h2>
      <div className="scoffersin">
        {data.map((e, i) => (
          <div className="scmapHoff" key={i}>
            <a href="/" style={{ textDecoration: "none" }}>
              <div className="scimgDiv">
                <img src={e.shpimg} alt="pic" />
              </div>
              <div className="sctitletxt">
                <p>{e.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="Ban1">
        <img
          src="https://tpc.googlesyndication.com/simgad/8169099931705018922?"
          alt="ban"
        ></img>
      </div>
    </div>
  );
}
