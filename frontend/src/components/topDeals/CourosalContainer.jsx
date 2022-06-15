import React, { useState, Component } from "react";
import { useEffect } from "react";
import axios from "axios";
import SliderComp from "./SliderComp";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  height: 475px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border-radius: 10px;
  display: flex;

  & > div {
    /* border: 1px solid white; */
  }
  .detailsOfCourosol {
    width: 35%;
    box-sizing: border-box;
    padding: 30px;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    gap: 15px;
    img {
      width: 200px;
    }
    .title {
      font-size: 32px;
      line-height: 40px;
      font-weight: bold;
    }
    .desc {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .courosol {
    /* flex-grow: 1; */
    /* height: auto; */
    width: 65%;
    /* border: 1px solid red; */
    box-sizing: border-box;
    /* padding: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    width: 60%;
    height: 45px;
    border: 0;
    color: #0046be;
    background-color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const CourosalContainer = ({ button, className, title, desc, logo, bg }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function data() {
      let { data } = await axios.get("http://localhost:8080/deal");
      console.log(data);
      setData([...data]);
    }
    data();
  }, []);

  return (
    <Wrapper bg={bg}>
      <div className="detailsOfCourosol">
        <img src={logo} alt="" />
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        {button ? (
          <button className="button">
            <a href="#" style={{ textDecoration: "none" }}>
              {button}
            </a>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="courosol">
        <SliderComp data={data} />
      </div>
    </Wrapper>
  );
};

export default CourosalContainer;
