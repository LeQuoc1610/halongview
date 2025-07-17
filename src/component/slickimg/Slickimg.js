import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Slickimg.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlyingDotsEffect from "../slickimg/FlyingDotsEffect"; 

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-prev`} onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-next`} onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

class Slickimg extends Component {
  render() {
    let settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };

    return (
      <div className="content">
        
        <div className="content-slider" style={{ position: "relative"}}>
          <FlyingDotsEffect />
          <Slider {...settings}>
            <div>
              <div className="slide-1"></div>
            </div>
            <div>
              <div className="slide-2"></div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Slickimg;
