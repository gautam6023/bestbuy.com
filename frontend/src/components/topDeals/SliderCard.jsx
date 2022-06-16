import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  /* border: 1px solid white; */
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-size: 13px;
  gap: 25px;
  text-align: left;
  line-height: 16px;
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .desc {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 10px;

    .title {
      color: #1d252c;

      &:hover {
        text-decoration: underline;
      }
    }
    .review {
      font-size: 16px;
    }
    .price {
      font-size: 18px;
      color: #bb0628;
      font-weight: 600;
    }
  }
`;
const SliderCard = (el) => {
  return (
    <Wrapper>
      <Link to="#" style={{ textDecoration: "none" }}>
        <img src={el.imgUrl} alt="" />
        <div className="desc">
          <p className="title">{el.title}</p>
          <p className="review">{el.rate}</p>
          {el.top ? <p className="topDeal">{el.top}</p> : ""}
          <p className="price">${el.price}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default SliderCard;
