import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Halongtwo.scss";

class Halongtwo extends Component {
  render() {
    return (
      <div className="halongcontent">
        <div className="halongcontent-inner">
          <div className="halongcontent-left">
            <div className="img"></div>
          </div>

          <div className="halongcontent-right">
            <h2 className="section-title"><span>VỊ TRÍ ĐẮC ĐỊA</span></h2>
            <p className="section-description">
              Sở hữu vị trí đắc địa tọa lạc tại Phố Hồng Tiến, Phường Trần Hưng
              Đạo, TP Hạ Long, Tỉnh Quảng Ninh sở hữu hạ tầng và tiện ích đồng
              bộ và một cộng đồng dân cư văn minh và phát triển
            </p>

            <h2 className="section-title">TẦM VIEW KHÔNG GIỚI HẠN</h2>
            <p className="section-description">
              Ha Long Bay View tự hào là dự án duy nhất tại Hạ Long sở hữu góc
              view tuyệt đẹp, tầm nhìn không giới hạn: Công viên Ha Long, Hồ Yết
              Kiêu, Công viên Đại Dương, Vịnh Ha Long...
            </p>

            <a href="#" className="detail-link">
              Chi tiết &gt;&gt; Vị trí Dự án Ha Long Bay View
            </a>
            <p className="click-to-enlarge-right">
              Click vào ảnh để xem ảnh phóng to
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Halongtwo;
