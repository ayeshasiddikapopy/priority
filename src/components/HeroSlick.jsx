import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from './Images';


const HeroSlick = () => {
   
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    
      return (
        <div className="slider-container slick__slider">
          <Slider {...settings}>
            <div className='slick__Img'>
              <Images src='src\assets\hero1.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero2.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero1.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero3.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero4.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero3.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero5.png'/>
            </div>
            <div className='slick__Img'>
              <Images src='src/assets/hero2.png'/>
            </div>
          </Slider>
        </div>
      );
}

export default HeroSlick