import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const CourosolDiv = styled.div`
  /* width: 100%; */
  width: 100px;
  margin: auto;
  border: 1px solid white;
  height: 100%;

  /* span {
    width: 50px;
    color: white;
  } */
`;

const SliderComp = ({ settings }) => {
  return (
    <CourosolDiv>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => {
            return <span key={i}>{el}</span>;
          })} */}
          <div>
            <div className="slickimg">
              <img
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14923/14923941.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>
                Blink Outdoor Wire-Free 1080p IP Security Camera System - 3-Pack
                - Black
              </p>
            </div>
            <div className="slickprc">
              <p>$214.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15748/15748026.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>
                Philips Hue A19 Smart Light Starter Kit w/ Hub & Dimmer -3 Pack
                -White/Colour Ambiance -Only at Best Buy
              </p>
            </div>
            <div className="slickprc">
              <p>$159.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15303/15303234.jpg"
                alt="img"
              />
            </div>
            <div>
              <p>
                Philips Hue A19 Smart Light Starter Kit w/ Hub & Dimmer -3 Pack
                -White/Colour Ambiance -Only at Best Buy
              </p>
            </div>
            <div className="slickprc">
              <p>$159.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15303/15303234.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>
                Google Nest Hub (2nd Gen) Smart Display with Google Assistant -
                Chalk
              </p>
            </div>
            <div className="slickprc">
              <p>$64.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/122/12222/12222651.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>Google Nest (Wired) Wi-Fi Video Doorbell - Black/White</p>
            </div>
            <div className="slickprc">
              <p>$218.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15621/15621549.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>
                Google Nest Cam Wire-Free Indoor/Outdoor Security Camera - 2
                Pack - White
              </p>
            </div>
            <div className="slickprc">
              <p>$339.99</p>
            </div>
          </div>
          <div>
            <div className="slickimg">
              <img
                src="	https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15237/15237362.jpg"
                alt="img"
              />
            </div>
            <div className="slicktxt">
              <p>Apple HomePod mini - Space Grey - Open Box</p>
            </div>
            <div className="slickprc">
              <p>$78.99</p>
            </div>
          </div>
        </Slider>
      </div>
    </CourosolDiv>
  );
};

export default SliderComp;
