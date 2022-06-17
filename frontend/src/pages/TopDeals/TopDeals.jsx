import React from "react";
import { TopDealsDiv } from "./TopDeals.styled";
import TopDealsImage from "../../assets/image/Icon.png";
import QuickPage from "../../assets/image/quick.png";
import FeaturedTopDeals from "../../components/topDeals/FeaturedTopDeals";
import ShopDealsByCategory from "../../components/topDeals/ShopDealsByCategory";
import CourosalContainer from "../../components/topDeals/CourosalContainer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
let futureDeals = [
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltabcad40d8d875509/622014d16f0333490a0e77bd/bbym-20220304-offer-ff-lockup-en-xs.jpg?width=828&quality=80&auto=webp",
    title: "The mobile sale you've been waiting for is here.",
    desc: "Check out the hottest deals on cell phones and plans. Sale ends Thursday, June 16.",
    link: "Explore the deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc175c8355e9c14ae/6298eaaeb86a794d785d42b0/sportsandrec-20220603-offer-top-deals-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save up to $500 on select electric bikes.",
    desc: "Plus, get more deals on electric scooters and hoverboards.",
    link: "Shop Now",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt090e986a37bd806a/62a0dd531944ac5ac425ecf8/ht-20220610-offer-smart-light-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save 25% when you buy 2 or more Philips Hue lights.",
    desc: "Create the perfect ambiance for any occasion with great deals on smart lights you can control with your phone.",
    link: "Shop Deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt515f5e34c7a113c9/629e3fc99bb72a0f7439ea32/ma-20220610-offer-td-2across-xs-evergreen.jpg?width=828&quality=80&auto=webp",
    title:
      "Save up to $1,000 with the purchase of 2 or more major kitchen appliances*.",
    desc: "",
    link: "Shop Deals",
  },
];

const TopDeals = () => {
  const [data, setData] = useState([]);

  let courosal1 = {
    logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc70b31bb92ddfced/61d60327191c5560467de5a2/global-topdeals-20220107-showcase-logo-m-en.png",
    title: "Don't miss out on these great deals.",
    desc: "Find incredible savings on must-have tech essentials and more.",
    // button: "Add to cart",
    bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8e1e4ddccfad34af/61d5f9d095fe2513b569c488/global-topdeals-20220107-showcase-bg-m.jpg?width=5760&quality=80&auto=webp",
    data,
    logoSize: "200px",
  };

  let courosal2 = {
    logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltae328b343cf3a02a/624f50345b71147a38d9ef1b/mp-20211105-logo-picks-white.png",
    title: "Save on the latest tech and more.",
    desc: "Discover this week's top Marketplace deals from our trusted sellers.",
    // button: "Add to cart",

    bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8e1e4ddccfad34af/61d5f9d095fe2513b569c488/global-topdeals-20220107-showcase-bg-m.jpg?width=5760&quality=80&auto=webp",
    data,
  };

  let courosal3 = {
    logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb758fd90e2973508/617b44daa2b4ac1067d75d22/global-lg-evergreen-featureskulist-logo-2.png",
    title: "Save on the latest tech and more.",
    desc: "Discover this week's top Marketplace deals from our trusted sellers.",
    button: "Explore Greatest Tech",

    bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt19347504a66c4c3c/6177317b6c56425dcbf64c33/global-lg-evergreen-featureskulist-less-m.jpg?width=5760&quality=80&auto=webp",
    data,

    cardShadow: "0 4px 16px rgb(0 0 0 / 8%)",
    textColor: "#020808",
    btnBg: "#0046be",
    btnColor: "#ffffff",
  };

  useEffect(() => {
    async function data() {
      let { data } = await axios.get("http://localhost:8080/deal");
      console.log(data);
      setData([...data]);
    }
    data();
  }, []);
  return (
    <TopDealsDiv>
      <p className="title-heading">Top Deals</p>
      {/* <div> */}
      <div className="topImageBanner flex ">
        <img src={TopDealsImage} alt="" />
      </div>
      {/* </div> */}
      <img className="quickSupportImage" src={QuickPage} alt="" />
      <div>
        <p className="titleOfComp">Featured top deals</p>
        <FeaturedTopDeals data={futureDeals} />
      </div>
      <div>
        <p className="titleOfComp">Shop deals by category</p>
        <ShopDealsByCategory className="shpByCate" />
      </div>
      <CourosalContainer className="courosalContainer" {...courosal1} />
      <div className="advertiseMent">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1ca9ebcd9783f1c9/620aeba6f011e923b061d514/global-20220220-bar-happyhour-m-en.png?width=50p&quality=80&auto=webp"
          alt=""
        />
        <div>
          <p>Our next great deal? Help us choose</p>
          <button>Learn More</button>
        </div>
      </div>
      <CourosalContainer className="courosalContainer" {...courosal2} />
      <CourosalContainer className="courosalContainer" {...courosal3} />
    </TopDealsDiv>
  );
};

export default TopDeals;
