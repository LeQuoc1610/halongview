import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/NewsSlider.scss";

const newsData = [
  {
    title: "Chính sách Dự án Hạ Long Bay View",
    date: "18 Tháng Hai, 2019",
    desc: "THÔNG BÁO V/v Ban hành Chính sách bán hàng Dự án Hạ Long Bay View ...",
    image: require("../imgslider/e01.jpg"),
  },
  {
    title: "Hạ Long Bay View – Giải nhiệt cơn nóng...",
    date: "18 Tháng Hai, 2019",
    desc: "Hạ Long – Quảng Ninh được biết tới như 1 thiên đường du lịch nghỉ dưỡng...",
    image: require("../imgslider/e02.jpg"),
  },
  {
    title: "KHU DU LỊCH TAM ĐẢO – Chủ đầu tư...",
    date: "18 Tháng Hai, 2019",
    desc: "Địa điểm: Thị trấn Tam Đảo – huyện Tam Đảo – tỉnh Vĩnh Phúc Chủ ...",
    image: require("../imgslider/e03.jpg"),
  },
  {
    title: "Tây Hồ Riverview – Nâng niu giá trị...",
    date: "18 Tháng Hai, 2019",
    desc: "Có tầm nhìn trực tiếp ra sông Hồng, hướng view về 2 cây cầu Nhật ...",
    image: require("../imgslider/e04.jpg"),
  },
  {
    title: "Dự án Cáp treo và Khu Du lịch Tam Đảo",
    date: "18 Tháng Hai, 2019",
    desc: "Nằm trên dãy núi Tam Đảo, cách Hà Nội 80km về phía bắc. Tây Thiên ...",
    image: require("../imgslider/e05.webp"),
  },
  {
    title: "Vị trí Dự án Hạ Long Bay View",
    date: "18 Tháng Hai, 2019",
    desc: "Tọa lạc trên đất vàng của thành phố Hạ Long, Hạ Long Bay View là ...",
    image: require("../imgslider/e02.jpg"),
  },
  {
    title: "Tổng quan Hạ Long Bay View Quảng Ninh",
    date: "18 Tháng Hai, 2019",
    desc: "Công trình Chung cư kết hợp trung tâm thương mại dịch vụ văn phòng cho ...",
    image: require("../imgslider/e06.jpg"),
  },
  {
    title: "Tiện ích Dự án Hạ Long Bay View",
    date: "18 Tháng Hai, 2019",
    desc: "Tại Lạc Hồng Hạ Long Bay View thừa hưởng đầy đủ tiện ích cao cấp ...",
    image: require("../imgslider/e07.jpg"),
  },
];

export default function NewsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 4000,
    speed: 500,
    cssEase:"ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="news-slider-container">
      <div className="title-wrapper">
        <h2 className="title">TIN TỨC TỪ CHỦ ĐẦU TƯ</h2>
      </div>

      <Slider {...settings}>
        {newsData.map((item, index) => (
          <div key={index}>
            <div className="news-card">
              <div
                className="news-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <p className="desc">{item.desc}</p>
                <a href="#">XEM THÊM</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
    
  );
}
