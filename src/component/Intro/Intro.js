import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from "react";
import "../scss/Intro.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="intro-inner">
          <div className="intro-title-wrapper">
            <div className="line"></div>
            <h2 className="intro-title">GIỚI THIỆU CHỦ ĐẦU TƯ</h2>
            <div className="line"></div>
          </div>
          <div className="container my-5">
            <div className="row align-items-center mb-5 intro-main">
              <div className="col-md-6 intro-text">
                <h2 className="mb-4">CHỦ ĐẦU TƯ GIÀU KINH NGHIỆM</h2>
                <p style={{ textAlign: "justify" }}>
                  Thành lập ngày 15/9/2003, sau 13 năm hoạt động, Lạc Hồng đã có
                  trên 500 cán bộ kỹ sư, cử nhân chuyên ngành và hơn ba ngàn
                  công nhân có tay nghề cao. Công ty hoạt động trên các lĩnh vực
                  thi công xây dựng dân dụng và công nghiệp, giao thông, thủy
                  lợi, viễn thông và tư vấn thiết kế. Trong lĩnh vực đầu tư, với
                  tiềm lực tài chính vững mạnh và đội ngũ lãnh đạo năng động,
                  tâm huyết, Lạc Hồng đã tập trung phát triển nhiều dự án bất
                  động sản và du lịch độc đáo, có chất lượng cao.
                </p>
                <div className="highlight mt-3">
                  <span>
                    Chi tiết &gt;&gt; Chủ đầu tư Dự án Hạ Long Bay View
                  </span>
                </div>
              </div>

              <div className="col-md-6 intro-images d-flex justify-content-center gap-3 mt-4 mt-md-0">
                <div className="building building-1"></div>
                <div className="building building-2"></div>
              </div>
            </div>

            <div className="row intro-section">
              <div className="col-md-6 mb-5">
                <h3 className="text-start section-title">
                  CHÍNH SÁCH BÁN HÀNG
                </h3>
                <ul className="list-policy">
                  <li>Cam kết bàn giao Căn hộ đúng thời hạn (Quý I/2019)</li>
                  <li>Bàn giao căn hộ Full nội thất 5 sao</li>
                  <li>Hỗ trợ thủ tục vay ngân hàng</li>
                  <li>Bàn giao sổ hồng vĩnh viễn trong vòng 1 năm</li>
                  <li>Ngân hàng SHB bảo lãnh tiến độ và cho vay mua căn hộ</li>
                  <li>Mua để ở, tự khai thác kinh doanh, ủy thác cho thuê…</li>
                  <li>Nhập hộ khẩu, sử dụng mọi tiện ích dự án.</li>
                </ul>
                <div className="highlight mt-3">
                  <span>
                    Chi tiết &gt;&gt; Chính sách bán hàng Hạ Long Bay View
                  </span>
                </div>
              </div>

              <div className="col-md-6 mb-5">
                <h3 className="text-start section-title">
                  CHÍNH SÁCH ƯU ĐÃI TÀI CHÍNH
                </h3>
                <ul className="list-policy">
                  <li>Căn hộ dịch vụ sở hữu vĩnh viễn (hometel)</li>
                  <li>
                    Đóng 30% nhận nhà, có thể cho thuê ngay chia sẻ lợi nhuận
                    90/10
                  </li>
                  <li>Hỗ trợ lãi suất 0% trong 2 năm</li>
                  <li>Ân hạn nợ gốc trong 2 năm đầu</li>
                  <li>Tỷ lệ Full phòng 80%</li>
                  <li>Tỷ suất sinh lời từ 15-20% GTCH/năm</li>
                </ul>
                <div className="highlight mt-3">
                  <span>
                    Chi tiết &gt;&gt; Chính sách ưu đãi tài chính Hạ Long Bay
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
