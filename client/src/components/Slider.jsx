import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  // const pagination = {
  //   clickable: true,

  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  const data = [
    "https://marketplace.canva.com/EAFBe-_WG8k/1/0/1600w/canva-gold-minimalist-fashion-stylist-service-medium-banner-9yTc9dnW3fE.jpg",
    "https://marketplace.canva.com/EAFY1d4gong/1/0/1600w/canva-brown-minimalist-new-arrival-fashion-banner-BMQnh-SXpC0.jpg",
    "https://marketplace.canva.com/EAFf_LDa9Ro/1/0/1600w/canva-beige-aesthetic-fashion-clothing-collection-medium-banner-7SIG679Cnfw.jpg",
  ];

  return (
    <div className="Swiper h-[calc(60vh+10px)]">
      <Swiper
        // pagination={pagination}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img className="h-full" src={data[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src={data[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src={data[2]} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// import React, { useState } from "react";
// import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// const Slider = () => {
//   const [slideNumber, setSlideNumber] = useState(0);
//   const [curentSlide, setCurentSlide] = useState(0);
//   const data = [
//     "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-blue-wall_158538-24057.jpg?w=826&t=st=1716015371~exp=1716015971~hmac=e214169221e94376da27a7d07a6a498a864422f5230e1d6cd8a5f896a2f61250",
//     "https://img.freepik.com/free-photo/young-handsome-man-travelling-with-bag_1303-19652.jpg?w=826&t=st=1716015444~exp=1716016044~hmac=6527af6564ec1219de4dbbd70fd748c9f59952f8732d1b11dee6f6d54e72940b",
//     "https://img.freepik.com/free-photo/young-handsome-man-choosing-cloth-shop_1303-19845.jpg?w=826&t=st=1716015552~exp=1716016152~hmac=fdfd1bfa6adbdc946d5fef29bf2e70f2e7c2624a5384ee537913ebefc794374c",
//   ];

//   const prevSlide = () => {
//     setCurentSlide(curentSlide == 0 ? 2 : (prev) => prev - 1);
//   };
//   const nextSlide = () => {
//     setCurentSlide(curentSlide == 2 ? 0 : (next) => next + 1);
//   };
//   return (
//     <div className=" h-[calc(100vh-80px)]">
//       <img className="w-[100vw] h-full object-cover" src={data[0]} alt="" />
//     </div>
//   );
// };

// export default Slider;
