import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Slideone from "../../assets/images/main-slider/hero_slider1.png";
import Slidetwo from "../../assets/images/main-slider/hero_slider1.png";
import Slidethree from "../../assets/images/main-slider/hero_slider1.png";
import bookicon1 from "../../assets/images/main/Book A Table.png";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

function Banner() {
  return (
    <Swiper
      className="banner-section banner-section-coustm"
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }} // Use "navigation" with lowercase, and place it outside the SwiperSlide elements
    >
      <div className="banner-container">
        <div className="banner-slider">
          <div className="swiper-wrapper">
            {[Slideone, Slidetwo, Slidethree].map((image, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide slide-item img-fluid"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content">
                      <div className="clearfix">
                        <div className="inner">
                          <div className="subtitle">
                            <span>delightful experience</span>
                          </div>
                          <div className="pattern-image">
                            <img
                              src={
                                require("../../assets/images/icons/separator.svg")
                                  .default
                              }
                              alt="mySvgImage"
                            />
                          </div>
                          <h1>
                            <span>
                              {index === 0
                                ? "Flavors Inspired by"
                                : index === 1
                                ? "Where every flavor"
                                : "For the love of"}
                              <br />
                              {index === 0
                                ? "the Seasons"
                                : index === 1
                                ? "tells a story"
                                : "delicious food"}
                            </span>
                          </h1>
                          <div className="text">
                            Come with family & feel the joy of mouthwatering
                            food
                          </div>
                          <div
                            className="links-box wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="link">
                              <Link
                                to="/menufour"
                                className="theme-btn btn-style-two clearfix"
                              >
                                <span className="btn-wrap">
                                  <span className="text-one">
                                    view our menu
                                  </span>
                                  <span className="text-two">
                                    view our menu
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-button-prev">
        <span className="fal fa-angle-left"></span>
      </div>
      <div className="swiper-button-next">
        <span className="fal fa-angle-right"></span>
      </div>
      <div className="book-btn">
        <a href="https://www.google.com/maps/reserve/v/dine/c/jpRqwoLH7tA?opi=89978449&gei=hRa7acbqIsm7hbIPpLTsyQc&source=pa&hl=en-GB&gei=hRa7acbqIsm7hbIPpLTsyQc&sourceurl=https://www.google.com/search?q%3Darponnar%2Bburmese%2Brestaurant%26ie%3DUTF-8%26oe%3DUTF-8%26hl%3Den-gb%26client%3Dsafari%26sei%3Dgxa7afrWKrGihbIP88-DoAc%26dlnr%3D1" target="_blank" rel="noopener noreferrer" className="theme-btn">
          <span className="icon">
            <img src={bookicon1} alt="" title="" />
          </span>
          <span className="txt">book a table</span>
        </a>
      </div>
    </Swiper>
  );
}

export default Banner;
