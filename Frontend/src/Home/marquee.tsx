import React from 'react'
import Marquee from "react-fast-marquee";
import Picture1 from "../assets/2023-04-NonSku-Recipe1-BrandLogo-Iams.avif";

 const marquee = () => {
  return (
    <Marquee>
    <img src={Picture1} alt="" />
    <img src={Picture1} alt="" />
    <img src={Picture1} alt="" />
    <img src={Picture1} alt="" />
    <img src={Picture1} alt="" />
  </Marquee>
  )
}
export default marquee;