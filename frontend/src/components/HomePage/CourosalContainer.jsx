import React, { useState, Component } from "react";
import { useEffect } from "react";
import axios from "axios";
import SliderComp from "./SliderComp";

const CourosalContainer = ({ className, title, desc, logo }) => {
  const [data, setData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className={className}>
      <div className="detailsOfCourosol">
        <img src={logo} alt="" />
        <p className="dtitle">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <div className="courosol">
        <SliderComp {...settings} />
      </div>
    </div>
  );
};

export default CourosalContainer;
