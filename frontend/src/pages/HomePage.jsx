import Ban1 from "../components/HomePage/Ban1";
import Cont1 from "../components/HomePage/Cont1";
import Htoff from "../components/HomePage/Htoff";
import Seas from "../components/HomePage/Seas";
import Shcat from "../components/HomePage/Shcat";
import styled from "styled-components";
import MainBanner from "../components/HomePage/MainBanner";
import CourosalContainer from "../components/topDeals/CourosalContainer";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

let slider1 = [
  {
    id: 1,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15725/15725752.jpg",
    title:
      "Amazon Fire TV 4-Series 55'' 4K UHD HDR LED Smart TV (B08T6H1RQD) - 2021",
    rate: "⭐⭐⭐",
    review: "(13 Reviews)",
    top: "Top Deal",
    save: "",
    price: "459.9",
  },
  {
    id: 2,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15386/15386728.jpg",
    title:
      "Amazon Fire TV Stick (3rd Gen) Media Streamer with Alexa Voice Remote",
    rate: "⭐⭐⭐⭐⭐",
    review: "(44 Reviews)",
    top: "",
    save: "",
    price: "44.99",
  },
  {
    id: 3,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16039/16039528.jpg",
    title:
      "Amazon Fire TV Stick Lite Media Streamer with Alexa Voice Remote Lite (2022)",
    rate: "⭐⭐⭐⭐",
    review: "(1 Reviews)",
    top: "Top Deal",
    save: "SAVE $15",
    price: "34.99",
  },
  {
    id: 4,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15665/15665553.jpg",
    title: "Amazon Fire TV Stick 4K Max Media Streamer with Alexa Voice Remote",
    rate: "⭐⭐⭐⭐⭐",
    review: "19 Reviews)",
    top: "Top deal",
    save: "SAVE $5",
    price: "59.99",
  },
  {
    id: 5,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15745/15745797.jpg",
    title:
      "Amazon Kindle Paperwhite 8GB 6.8'' Digital eReader with Touchscreen (B08N36XNTT) - Black",
    rate: "⭐⭐⭐⭐⭐",
    review: "(3 Reviews)",
    top: "Top Deal",
    save: "SAVE $25",
    price: "124.99",
  },
  {
    id: 6,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15665/15665552.jpg",
    title:
      "Amazon Fire TV Stick 4K (2021) Media Streamer with Alexa Voice Remote",
    rate: "⭐⭐⭐⭐",
    review: "(36 Reviews)",
    top: "Top Deal",
    save: "SAVE $15",
    price: "54.99",
  },
  {
    id: 7,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15725/15725755.jpg",
    title:
      "Amazon Fire TV 4-Series 43'' 4K UHD HDR LED Smart TV (B08T6FMSY8) - 2021",
    rate: "⭐⭐⭐⭐",
    review: "(15 Reviews)",
    top: "Top Deal",
    save: "",
    price: "359.9",
  },
  {
    id: 8,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/130/13023/13023977.jpg",
    title: "Amazon Echo Dot (3rd Gen) Smart Speaker with Alexa - Charcoal",
    rate: "⭐⭐⭐⭐⭐",
    review: "(27528 Reviews)",
    top: "Top Deal",
    save: "SAVE $5",
    price: "29.99",
  },
  {
    id: 9,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15725/15725757.jpg",
    title:
      "Amazon Fire TV Omni 75'' 4K UHD HDR LED Smart TV (B08T6DX84M) - 2021",
    rate: "",
    review: "(0 Reviews)",
    top: "",
    save: "SAVE $315",
    price: "959.99",
  },
  {
    id: 10,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/146/14640/14640234.jpg",
    title:
      "Amazon Fire HD 8 Kids Edition 8'' 32GB FireOS Tablet with MTK/MT8168 4-Core Processor - Blue",
    rate: "⭐⭐⭐⭐",
    review: "(29 Reviews)",
    top: "Top Deal",
    save: "SAVE $35",
    price: "179",
  },
];

let slider2 = [
  {
    id: 1,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14923/14923941.jpg",
    title:
      "Blink outdoor Wire -Free !080p IP Security Camera System- 3 pack- Black",
    rate: "⭐⭐⭐⭐",
    review: "(1628 Reviews)",
    top: "Top Deal",
    save: "SAVE $115",
    price: "214.99",
  },
  {
    id: 2,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15748/15748026.jpg",
    title: "Philips Hue A19 Smart Light Stater kit w/ Hub & Dimmer -3 -Pack",
    rate: "⭐⭐⭐⭐",
    review: "(1258 Reviews)",
    top: "Top Deal",
    save: "SAVE $90",
    price: "159.99",
  },
  {
    id: 3,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15303/15303234.jpg",
    title:
      "Google Nest Hub (2nd Gen) Smart Display with google Assistant - Chalk",
    rate: "⭐⭐⭐⭐",
    review: "(236 Reviews)",
    top: "Top Deal",
    save: "SAVE $35",
    price: "64.99",
  },
  {
    id: 4,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/122/12222/12222651.jpg",
    title: "Google Nest (Wired) Wi-Fi Video Doorbell - Black/White",
    rate: "⭐⭐⭐⭐⭐",
    review: "(8778 Reviews)",
    top: "Top Deal",
    save: "SAVE $80",
    price: "218.99",
  },
  {
    id: 5,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15621/15621549.jpg",
    title: "Google Nest Cam Wire-Free Indoor/Outdoor Security Camera",
    rate: "⭐⭐⭐⭐",
    review: "(627 Reviews)",
    top: "Top Deal",
    save: "SAVE $50",
    price: "339.99",
  },
  {
    id: 6,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15237/15237362.jpg",
    title: "Apple HomePod mini- Space Grey - Opened Box",
    rate: "",
    review: "(0 Reviews)",
    top: "Top Deal",
    save: "SAVE $21",
    price: "78.99",
  },
  {
    id: 7,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15299/15299145.jpg",
    title: "Ring Wigred wi-Fi Video Doorbell - Black",
    rate: "⭐⭐⭐⭐⭐",
    review: "(793 Reviews)",
    top: "Top Deal",
    save: "SAVE $17",
    price: "67.99",
  },
  {
    id: 8,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/145/14548/14548390.jpg",
    title: "Ring Alaram 8-Piece Security Kit (2nd Gen) - English",
    rate: "⭐⭐⭐⭐",
    review: "(661 Reviews)",
    top: "Top Deal",
    save: "SAVE $75",
    price: "254.99",
  },
  {
    id: 9,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14966/14966507.jpg",
    title: "Amzon Echo (4th Gen) Smart Home Hub with Alexa - Charcoal",
    rate: "⭐⭐⭐⭐⭐",
    review: "978( Reviews)",
    top: "Top Deal",
    save: "SAVE $5",
    price: "94.99",
  },
  {
    id: 10,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14931/14931829.jpg",
    title: "Lenovo Smart Clock Essential with Google Assistant - Grey Cloth",
    rate: "⭐⭐⭐⭐",
    review: "(2303 Reviews)",
    top: "",
    save: "SAVE $80",
    price: "399.99",
  },
];

let slider3 = [
  {
    id: 1,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15643/15643341.jpg",
    title: "ASUS Flip CM5 15.6'' Touchscreen Chromebook - Grey",
    rate: "⭐⭐⭐⭐",
    review: "(4 Reviews)",
    top: "Top Deal",
    save: "250",
    price: "499",
  },
  {
    id: 2,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15731/15731968.jpg",
    title: "Shark S7000C Steam & Scrub Mop",
    rate: "",
    review: "(0 Reviews)",
    top: "",
    save: "",
    price: "199.99",
  },
  {
    id: 3,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16022/16022243.jpg",
    title: "Dell G15 15.6'' Gaming Laptop -Blck (Intel Core i7-12700H/512Gb..",
    rate: "",
    review: "(0 Reviews)",
    top: "",
    save: "",
    price: "1,899.99",
  },
  {
    id: 4,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/101/10168/10168188.jpg",
    title: "HP 61XL Tri-Color Ink (CH56WN#140)",
    rate: "⭐⭐⭐⭐",
    review: "(3292 Reviews)",
    top: "",
    save: "",
    price: "71.99",
  },
  {
    id: 5,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/103/10322/10322950.jpg",
    title: "Hp 62XL Tri-Color Ink (C2P07AN#140)",
    rate: "⭐⭐⭐⭐⭐",
    review: "(3695 Reviews)",
    top: "",
    save: "",
    price: "69.99",
  },
  {
    id: 6,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/104/10404/10404285.jpg",
    title: "HP 63 Black Ink (F6U62AN#140)",
    rate: "⭐⭐⭐⭐⭐",
    review: "(32.99 Reviews)",
    top: "",
    save: "",
    price: "32.99",
  },
  {
    id: 7,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/105/10574/10574421.jpg",
    title: "HP LAser Jet 654A Cyan Toner (CF331A)",
    rate: "⭐⭐⭐⭐⭐",
    review: "(1 Reviews)",
    top: "",
    save: "",
    price: "603",
  },
  {
    id: 8,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/116/11622/11622686.jpg",
    title: "HP Color and Black Ink (Z2H77AN#140)",
    rate: "⭐⭐⭐⭐⭐",
    review: "(516 Reviews)",
    top: "",
    save: "",
    price: "74.99",
  },
  {
    id: 9,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/122/12243/12243908.jpg",
    title: "HP 202A Black Toner (CF500A)",
    rate: "⭐⭐⭐⭐⭐",
    review: "(261 Reviews)",
    top: "",
    save: "",
    price: "104",
  },
  {
    id: 10,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/135/13579/13579622.jpg",
    title: "Shark WANDVAC Handheld Vaccume- Graphite",
    rate: "⭐⭐⭐⭐",
    review: "(740 Reviews)",
    top: "",
    save: "",
    price: "179.99",
  },
  {
    id: 11,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/138/13836/13836140.jpg",
    title: "Shark IQ Robot Self-Empty Robot Vaccume-Blck",
    rate: "⭐⭐⭐⭐",
    review: "(2960 Reviews)",
    top: "",
    save: "",
    price: "699.99",
  },
  {
    id: 12,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/145/14591/14591240.jpg",
    title: "Sonos Five Wireless Multi-room Speaker- Single- Black",
    rate: "⭐⭐⭐⭐⭐",
    review: "(789 Reviews)",
    top: "",
    save: "",
    price: "699.99",
  },
  {
    id: 13,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/145/14591/14591241.jpg",
    title: "Google Chromecat with Google TV- Show",
    rate: "⭐⭐⭐⭐",
    review: "(901 Reviews)",
    top: "Top Deal",
    save: "",
    price: "59.99",
  },
  {
    id: 14,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/155/15568/15568276.jpg",
    title: "Toshiba Canvio Ready 2TB USB 3.0 External Hard Drive...",
    rate: "⭐⭐⭐⭐",
    review: "(17 Reviews)",
    top: "",
    save: "",
    price: "63.98",
  },
  {
    id: 15,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15643/15643341.jpg",
    title: "ASUS Flip CMN 15.6'' Touchscreen Chromebook- Grey",
    rate: "⭐⭐⭐⭐",
    review: "(4 Reviews)",
    top: "Top Deal",
    save: "250",
    price: "499.99",
  },
];

let courosal1 = {
  logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt357a1549f26f6dd3/628585a2af7b396927edc87e/global-20220520-fsl-title-fathersday-en.png",
  title: "Father's Day is almost here!",
  desc: "Get your gifts in as little as one hour with Quick and Easy Store Pickup, just in time for June 19.",
  button: "Explore More Father's Day Gift",

  bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt58d60a70958804dd/627db4fd50cfb74c8b9076eb/global-20220520-fsl-bg-fathersday-m.jpg?width=5760&quality=80&auto=webp",
  data: slider1,

  cardShadow: "0 4px 16px rgb(0 0 0 / 8%)",

  btnBg: "#ffffff",
  btnColor: "#0046be",
};

let courosal2 = {
  logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltae328b343cf3a02a/624f50345b71147a38d9ef1b/mp-20211105-logo-picks-white.png",
  title: "Save on the latest tech and more.",
  desc: "Discover this week's top Marketplace deals from our trusted sellers.",
  // button: "Add to cart",

  bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8e1e4ddccfad34af/61d5f9d095fe2513b569c488/global-topdeals-20220107-showcase-bg-m.jpg?width=5760&quality=80&auto=webp",
  data: slider2,
};

let courosal3 = {
  logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb758fd90e2973508/617b44daa2b4ac1067d75d22/global-lg-evergreen-featureskulist-logo-2.png",
  title: "Save on the latest tech and more.",
  desc: "Discover this week's top Marketplace deals from our trusted sellers.",
  button: "Explore Greatest Tech",

  bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt19347504a66c4c3c/6177317b6c56425dcbf64c33/global-lg-evergreen-featureskulist-less-m.jpg?width=5760&quality=80&auto=webp",
  data: slider3,

  cardShadow: "0 4px 16px rgb(0 0 0 / 8%)",
  textColor: "#020808",
  btnBg: "#0046be",
  btnColor: "#ffffff",
};

export default function HomePage() {
  // var dataAr=[];
  let courosal = {
    logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc70b31bb92ddfced/61d60327191c5560467de5a2/global-topdeals-20220107-showcase-logo-m-en.png",
    title: "Don't miss out on these great deals.",
    desc: "Find incredible savings on must-have tech essentials and more.",
  };
  return (
    <Wrapper className="mainContainer">
      <MainBanner />
      {/* <Cont1 /> */}
      <Ban1 />
      <Htoff />
      <Seas />
      <Shcat />
      <CourosalContainer className="courosalContainer" {...courosal1} />
      {/* <CourosalContainer className="courosalContainer" {...courosal} /> */}
      <CourosalContainer className="courosalContainer" {...courosal2} />
      <CourosalContainer className="courosalContainer" {...courosal3} />
    </Wrapper>
  );
}
