import React, { Component } from "react";
import "./allcss.css";
import adBanner from "../../assets/image/home page banner.jpeg";
import services from "../../assets/image/homePageBan2.webp";
export default class Ban1 extends Component {
  render() {
    return (
      <div className="Ban1">
        <img src={adBanner} alt="/" style={{ marginBottom: "30px" }} />
        <img src={services} alt="/" />
      </div>
    );
  }
}
