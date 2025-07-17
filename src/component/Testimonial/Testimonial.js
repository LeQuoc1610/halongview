import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.scss";
import hl1 from "../imgslider/imgdangky/hl1.jpg";
import hl2 from "../imgslider/imgdangky/hl2.jpg";


const testimonials = [
  {
    name: "Quỳnh Hoa",
    location: "Hà Nội",
    content:
      "Thật tuyệt vời khi sở hữu căn hộ tại dự án Hạ Long Bay View Apartment. Mình đã hoàn tất thủ tục vay ngân hàng lãi suất 0% trong 2 năm.",
    image: hl1,
    stars: 5,
  },
  {
    name: "Hoàng Tuyên",
    location: "Ninh Bình",
    content:
      "Nhân viên tư vấn rất nhiệt tình, được tư vấn Tài chính từ Giám đốc Kinh doanh cảm ơn Hạ Long Bay View Apartment. Mức cho thuê năm đầu 15% GTCH quá thật hấp dẫn!",
    image: hl2,
    stars: 5,
  },
];

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
  };
return (
  <>
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div className="slider-section">
          <div className="slider-content">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index}>
                  <div className="testimonial-item">
                    <div className="avatar">
                      <img src={item.image} alt={`${item.name} avatar`} />
                    </div>
                    <div className="content">
                      <div className="stars">
                        {[...Array(item.stars)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                      <p className="comment">{item.content}</p>
                      <div className="author">
                        <span className="name">{item.name}</span>
                        <span className="separator">•</span>
                        <span className="location">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

    {/* Cta section nằm ngoài testimonial-container */}
    <div className="cta-section">
      <div className="cta-content">
        <p className="cta-text">
          TƯ VẤN TRỰC TIẾP TỪ<br />
          GIÁM ĐỐC KINH DOANH DỰ ÁN
        </p>
        <button className="cta-button">ĐĂNG KÝ</button>
      </div>
    </div>
  </>
);


}
