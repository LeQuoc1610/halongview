import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../scss/Tienich.scss";

const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev-arrow"
    onClick={onClick}
    role="button"
    aria-label="Previous Slide"
  >
    <i className="fas fa-chevron-left"></i>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow next-arrow"
    onClick={onClick}
    role="button"
    aria-label="Next Slide"
  >
    <i className="fas fa-chevron-right"></i>
  </div>
);

const Tienich = () => {
  const tienIchList = [
    "Trung tâm thương mại",
    "Bể bơi",
    "Phòng tập Gym",
    "Phòng họp, hội nghị",
    "Khu vui chơi trẻ em",
    "Nhà hàng",
    "Khu thể thao",
    "Công viên cây xanh",
    "Hồ điều hoà",
    "Skybar",
    "Xông hơi, Massage",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="tienich-section">
      <div className="tienich-wrapper">
        <div className="header-content">
          <div className="tienich-header d-flex justify-content-center align-items-center gap-3">
            <div className="line"></div>
            <h2 className="tienich-title text-uppercase fw-bold text-center">
              <span>TIỆN ÍCH DỰ ÁN</span>
            </h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="tienich-content row justify-content-center gx-5">
          <div className="col-lg-7 col-md-10 slider-wrapper">
            <div className="slider-hover-zone">
              <div className="tienich-slider position-relative">
              <Slider {...settings}>
                <div className="slide-item slide1"></div>
                <div className="slide-item slide2"></div>
                <div className="slide-item slide3"></div>
              </Slider>
            </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10 tienichlist-wrapper mt-4 mt-lg-0">
            <div className="tienichlist text-white">
              <ul className="list-unstyled">
                {tienIchList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="tienich-detail mt-3">
                <em>Chi tiết &gt;&gt; <span>Tiện ích Dự án</span></em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienich;
