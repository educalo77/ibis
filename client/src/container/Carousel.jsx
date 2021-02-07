import React from "react";
import Carousels from "react-material-ui-carousel";
import carousel from "./css/carousel.module.css";

function Carousel() {
  const products = [
    {
      img: "http://imgfz.com/i/Rb8lpKS.jpeg",
    },
    {
      img: "http://imgfz.com/i/WiVoD0m.jpeg",
    },
    {
      img: "http://imgfz.com/i/OjpvTaL.jpeg",
    },
    {
      img: "http://imgfz.com/i/tkMZeHB.jpeg",
    },
    {
      img: "http://imgfz.com/i/XFSEMs7.jpeg",
    },
    {
      img: "http://imgfz.com/i/0uHCF1x.jpeg",
    },
    {
      img: "http://imgfz.com/i/fBadrhJ.jpeg",
    },
    {
      img: "http://imgfz.com/i/f71kjIB.jpeg",
    },
    {
      img: "http://imgfz.com/i/xEMeSjY.jpeg",
    },
  ];

  return (
    <Carousels className={carousel.container}>
      {products &&
        products.map((item, i) => (
          <img
            className={carousel.image}
            key={i}
            src={item.img}
            style={{ width: "800px" }}
            alt=""
          />
        ))}
    </Carousels>
  );
}

export default Carousel;
