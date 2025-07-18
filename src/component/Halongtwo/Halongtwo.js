import React from "react";
import "../scss/Halongtwo.scss";

const Halongtwo = () => {
  return (
    <section className="halongcontent py-5">
      <div className="container halongcontent-inner">
        <div className="row align-items-center g-5">
         
          <div className="col-lg-6">
            <div className="img bg-img"></div>
          </div>

          <div className="col-lg-6">
            <h2 className="section-title">
              <span>VỊ TRÍ ĐẮC ĐỊA</span>
            </h2>
            <p className="section-description">
              Sở hữu vị trí đắc địa tọa lạc tại Phố Hồng Tiến, Phường Trần Hưng Đạo, TP Hạ Long, Tỉnh Quảng Ninh,
              sở hữu hạ tầng và tiện ích đồng bộ và một cộng đồng dân cư văn minh và phát triển.
            </p>

            <h2 className="section-title">
              <span>TẦM VIEW KHÔNG GIỚI HẠN</span>
            </h2>
            <p className="section-description">
              Ha Long Bay View tự hào là dự án duy nhất tại Hạ Long sở hữu góc view tuyệt đẹp, tầm nhìn không giới hạn:
              Công viên Ha Long, Hồ Yết Kiêu, Công viên Đại Dương, Vịnh Ha Long...
            </p>

            <a href="#" className="detail-link">
              Chi tiết &gt;&gt; Vị trí Dự án Ha Long Bay View
            </a>
            <p className="click-to-enlarge-right">Click vào ảnh để xem ảnh phóng to</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halongtwo;
