import React from "react";
import styled from "styled-components";
const CourosalContainer = ({ className, title, desc, logo }) => {
  return (
    <div className={className}>
      <div className="detailsOfCourosol">
        <img src={logo} alt="" />
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <div className="courosol"></div>
    </div>
  );
};

export default CourosalContainer;
