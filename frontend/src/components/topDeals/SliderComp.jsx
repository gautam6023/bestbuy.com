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

  span {
    width: 50px;
    color: white;
  }
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
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </CourosolDiv>
  );
};

export default SliderComp;
