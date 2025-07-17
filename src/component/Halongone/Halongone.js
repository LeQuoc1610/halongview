import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Halongone.scss";

class Halongone extends Component {
  render() {
    return (
      <div className="halong-container">
        <div className="halong-left">
          <h2 className="halong-title">TỔNG QUAN DỰ ÁN</h2>
          <p className="halong-desc">
            <strong>Dự án Hạ Long Bay View</strong> – Tiếp nối sự thành công của dự án Lạc Hồng Lotus 1 và Lạc Hồng Lotus 2 khu Ngoại Giao Đoàn – Hà Nội, Công ty Cổ Phần Đầu Tư Lạc Hồng cho ra mắt thị trường Quảng Ninh dự án Hạ Long Bay View với gần 600 căn hộ đẳng cấp. Dự án được đầu tư hiện đại về hạ tầng kỹ thuật, nằm trong không gian xanh với không khí trong lành và không gian yên tĩnh, đảm bảo cuộc sống văn minh, thuận lợi cho dân cư sinh sống, đồng thời góp phần tích cực vào quy hoạch cảnh quan kiến trúc của khu đô thị tại thành phố Hạ Long, tỉnh Quảng Ninh.
          </p>
          <p className="halong-link">
            <em>Chi tiết &gt;&gt; Tổng quan Dự án Hạ Long Bay View</em>
          </p>
        </div>
        <div className="halong-right"></div>
      </div>
    );
  }
}

export default Halongone;
