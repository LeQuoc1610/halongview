import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Halongone.scss";

class Halongone extends Component {
  render() {
    return (
      <div className="section-content relative">
        <div
          className="gap-element"
          style={{ display: "block", height: "auto", paddingTop: "35px" }}
        ></div>
        <div className="row align-middle">
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <div className="container section-title-container">
                <h3 className="section-title section-title-normal">
                  <b></b>
                  <span
                    className="section-title-main"
                    style={{ fontSize: "1.4rem",color: "rgb(238, 158, 10)"}}
                  >
                    TỔNG QUAN DỰ ÁN
                  </span>
                  <b></b>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Dự án Hạ Long Bay View – Tiếp nối sự thành công của dự án Lạc
                Hồng Lotus 1 và Lạc Hồng Lotus 2 khu Ngoại Giao Đoàn – Hà Nội,
                Công ty Cổ Phần Đầu Tư Lạc Hồng cho ra mắt thị trường Quảng Ninh
                dự án Hạ Long Bay View với gần 600 căn hộ đẳng cấp. Dự án được
                đầu tư hiện đại về hạ tầng kỹ thuật, nằm trong không gian xanh
                với không khí trong lành và không gian yên tĩnh, đảm bảo cuộc
                sống văn minh, thuận lợi cho dân cư sinh sống, đồng thời góp
                phần tích cực vào quy hoạch cảnh quan kiến trúc của khu đô thị
                tại thành phố Hạ Long, tỉnh Quảng Ninh.
              </p>
            </div>
          </div>

          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <div className="gallery-box">
                <div className="image-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Halongone;
