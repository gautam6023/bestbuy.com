import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  margin: 30px 0;
  height: 500px;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  gap: 20px;
  & > div {
    width: 50%;
    /* border: 1px solid black; */
    height: 100%;
  }

  .firstDiv {
    background-color: #f2f7fa;
    display: flex;

    box-sizing: border-box;
    padding: 25px;

    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    img {
      width: 250px;
    }

    .headingBan {
      font-size: 35px;
      font-weight: bold;
    }
    .tagLine {
      font-size: 18px;
    }
  }

  .secondDiv {
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > div {
      height: 50%;
      /* border: 1px solid black; */
      width: 100%;
    }

    .subDiv_second {
      background-color: #004ed5;
      display: flex;
      & > div:first-child {
        /* border: 1px solid white; */
        width: 60%;
        box-sizing: border-box;
        padding: 20px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 15px;
        & > p:first-child {
          font-size: 22px;
          font-weight: bold;
        }
        button {
          width: 40%;
          height: 45px;
        }
      }
      img {
        height: 100%;
      }
    }

    .subDivNoTwo {
      display: flex;
      gap: 20px;
      & > div {
        height: 100%;
        width: 50%;
        /* border: 1px solid black; */
      }
      .topDeals {
        box-sizing: border-box;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: relative;
        text-align: center;
        background-color: #004ed5;
        img {
          width: 180px;
        }
        & > p:nth-child(2) {
          position: absolute;
          top: 110px;
        }
        button {
          position: absolute;
          top: 175px;
        }
      }
      .appleCon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #f1f5fb;
        img {
          width: 100%;
        }

        p {
          font-weight: bold;
        }
      }
    }
  }
`;
const MainBanner = () => {
  return (
    <Wrapper>
      <div className="firstDiv">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt61985f76d0fbe78d/62a28c0743918857196ec434/wi-20220610-feature-fg-friends-and-family-eng-xs.png?width=50p&quality=80&auto=webp"
          alt=""
        />
        <p className="headingBan">
          The mobile sale you've been waiting for is here.
        </p>
        <p className="tagLine">
          Check out the hottest deals on cell phones and plans. Sale ends
          Thursday, June 16.
        </p>
        <Button
          style={{ backgroundColor: "rgb(0,83,224)" }}
          variant="contained"
        >
          EXPLORE DETAILS
        </Button>
      </div>
      <div className="secondDiv">
        <div className="subDiv_second">
          <div>
            <p>Make Dad's Day.</p>
            <p>"Get great deals on gifts is sure love"</p>
            <Button
              style={{ backgroundColor: "#f8f8f8", color: "rgb(0,83,224)" }}
              variant="contained"
            >
              SHOP NOW
            </Button>
          </div>
          <img
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte865ae50fadb89c0/62841107d31030576a349c70/global-20220520-feature-fg-fathersday-xs-tall.png?width=50p&quality=80&auto=webp"
            alt=""
          />
        </div>
        <div className="subDivNoTwo">
          <div className="topDeals">
            <img
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3cb363066fe2a6de/6221257c2f7a0b2e3f26cf39/global-evergreen-hp-topdeals-grid3-text-m.png?width=20p&quality=80&auto=webp"
              alt=""
            />
            <p>Find the best offers from our latest sales, all in one place</p>
            <Button
              style={{ backgroundColor: "#f8f8f8", color: "rgb(0,83,224)" }}
              variant="contained"
            >
              <Link
                to={"/products/topdeals"}
                style={{ textDecoration: "none", color: "rgb(0,83,224)" }}
              >
                SHOP NOW
              </Link>
            </Button>
          </div>
          <div className="appleCon">
            <img
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt44552786da671881/6261bf59fd9afd4b1fe30aad/computing-20220408-feature-fg-apple-mothers-day-xs.png?quality=80&auto=webp"
              alt=""
            />
            <p>Dad will love an Apple gift</p>
            <Button
              style={{ backgroundColor: "rgb(0,83,224)" }}
              variant="contained"
            >
              <Link
                to={"/products/APPLE"}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                SHOP NOW
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainBanner;
