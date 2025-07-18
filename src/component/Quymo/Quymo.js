import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from "react";
import "../scss/Quymo.scss";

class Quymo extends Component {
  render() {
    return (
      <div className="quymo-container">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="quymo-left"></div>
              <div className="quymo-view-more-wrapper">
                <a href="#" className="quymo-view-more-link">
                  Xem thêm &gt;&gt; Quy mô Dự án Hạ Long Bay View
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="quymo-right">
                <h2 className="quymo-title">QUY MÔ DỰ ÁN</h2>
                <ul className="quymo-details-list">
                  <li><span className="bullet">-</span> Tên dự án: Hạ Long Bay View</li>
                  <li><span className="bullet">-</span> Chủ đầu tư: Công ty cổ phần Đầu tư Lạc Hồng</li>
                  <li><span className="bullet">-</span> Vị trí: Phường Trần Hưng Đạo, Thành phố Hạ Long, Quảng Ninh</li>
                  <li><span className="bullet">-</span> Đơn vị tư vấn thiết kế: Tổng công ty tư vấn XD Việt Nam</li>
                  <li><span className="bullet">-</span> Đơn vị thi công: Công ty Cổ phần Đầu tư Lạc Hồng</li>
                  <li><span className="bullet">-</span> Tư vấn giám sát: Công ty CP Tư vấn và Kiểm định XD Hạ Long</li>
                  <li><span className="bullet">-</span> Tổng diện tích khu đất: 3.392,2 m² | Diện tích xây dựng: 2.527 m²</li>
                  <li><span className="bullet">-</span> Tổng diện tích tầng hầm: 3.127 m²</li>
                  <li><span className="bullet">-</span> Tổng số căn hộ: 568 căn</li>
                  <li><span className="bullet">-</span> Bàn giao: Quý I/2019</li>
                  <a href="#" className="quymo-view-more-link">
                    Chi tiết &gt;&gt; Tiện ích Dự án
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quymo;
