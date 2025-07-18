import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../scss/Tienich.scss";

const PrevArrow = ({ onClick, isHovered }) => (
  <div
    onClick={onClick}
    style={{
      left: "20px",
      zIndex: 2,
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      transform: isHovered
        ? "translateY(-50%) translateX(0)"
        : "translateY(-50%) translateX(-20px)",
      cursor: "pointer",
      transition: "transform 0.4s ease, opacity 0.4s ease",
      opacity: isHovered ? 1 : 0,
      pointerEvents: isHovered ? "auto" : "none",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform = "translateY(-50%) scale(1)")
    }
  >
    <i className="fas fa-chevron-left" style={{ color: "white", fontSize: "18px" }}></i>
  </div>
);

const NextArrow = ({ onClick, isHovered }) => (
  <div
    onClick={onClick}
    style={{
      right: "20px",
      zIndex: 2,
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      transform: isHovered
        ? "translateY(-50%) translateX(0)"
        : "translateY(-50%) translateX(20px)",
      cursor: "pointer",
      transition: "transform 0.4s ease, opacity 0.4s ease",
      opacity: isHovered ? 1 : 0,
      pointerEvents: isHovered ? "auto" : "none",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform = "translateY(-50%) scale(1)")
    }
  >
    <i className="fas fa-chevron-right" style={{ color: "white", fontSize: "18px" }}></i>
  </div>
);

const Tienich = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    nextArrow: <NextArrow isHovered={isHovered} />,
    prevArrow: <PrevArrow isHovered={isHovered} />,
  };

  return (
    <div className="tienich-section">
      <div className="container">
        <div className="header-content">
          <div className="tienich-header d-flex justify-content-center align-items-center gap-3">
             <div className="line"></div>
            <h2 className="tienich-title text-uppercase fw-bold text-center">
              <span>TIỆN ÍCH DỰ ÁN</span>
            </h2>
             <div className="line"></div>
          </div>
        </div>

        <div className="row tienich-content justify-content-center align-items-start gx-5">
          <div
            className="slider col-lg-7 col-md-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="tienich-slider position-relative">
              <Slider {...settings}>
                <div className="slide-item slide1"></div>
                <div className="slide-item slide2"></div>
                <div className="slide-item slide3"></div>
              </Slider>
            </div>
          </div>

          <div className="tienichlist col-lg-5 col-md-10 mt-4 mt-lg-0 text-white">
            <ul className="list-unstyled">
              {tienIchList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="tienich-detail mt-3 fw-semibold fst-italic">
              <em>
                Chi tiết &gt;&gt; <span>Tiện ích Dự án</span>
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienich;
