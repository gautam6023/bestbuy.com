import React from "react";
import { TopDealsDiv } from "./TopDeals.styled";
import TopDealsImage from "../../assets/image/Icon.png";
import QuickPage from "../../assets/image/quick.png";
import FeaturedTopDeals from "../../components/topDeals/FeaturedTopDeals";
import ShopDealsByCategory from "../../components/topDeals/ShopDealsByCategory";

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
        <FeaturedTopDeals data={futureDeals} className="futureTopDeals" />
      </div>
      <div>
        <p className="titleOfComp">Shop deals by category</p>
        <ShopDealsByCategory className="shpByCate" />
      </div>
    </TopDealsDiv>
  );
};

export default TopDeals;
