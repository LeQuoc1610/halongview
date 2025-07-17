import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from "react";
import "../scss/Intro.scss";

class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="intro-inner">
          <h2 className="intro-title">GIỚI THIỆU CHỦ ĐẦU TƯ</h2>

          <div className="intro-main">
            <div className="intro-text">
              <h2>CHỦ ĐẦU TƯ GIÀU KINH NGHIỆM</h2>
              <p>
                Thành lập ngày 15/9/2003, sau 13 năm hoạt động, Lạc Hồng đã có trên 500 cán bộ kỹ sư,
                cử nhân chuyên ngành và hơn ba ngàn công nhân có tay nghề cao. Công ty hoạt động trên
                các lĩnh vực thi công xây dựng dân dụng và công nghiệp, giao thông, thủy lợi, viễn
                thông và tư vấn thiết kế.
              </p>
              <p>
                Trong lĩnh vực đầu tư, với tiềm lực tài chính vững mạnh và đội ngũ lãnh đạo năng động,
                tâm huyết, Lạc Hồng đã tập trung phát triển nhiều dự án bất động sản và du lịch độc
                đáo, có chất lượng cao.
              </p>
              <div className="highlight">
                <span>Chi tiết &gt;&gt; Chủ đầu tư Dự án Hạ Long Bay View</span>
              </div>
            </div>

            <div className="intro-images">
              <div className="img1">
                <div className="building building-1"></div>
              </div>
              <div className="img2">
                <div className="building building-2"></div>
              </div>
            </div>
          </div>

          <div className="intro-section">
            <div className="column">
              <h3>CHÍNH SÁCH BÁN HÀNG</h3>
              <ul>
                <li>Cam kết bàn giao Căn hộ đúng thời hạn (Quý I/2019)</li>
                <li>Bàn giao căn hộ Full nội thất 5 sao</li>
                <li>Hỗ trợ thủ tục vay ngân hàng</li>
                <li>Bàn giao sổ hồng vĩnh viễn trong vòng 1 năm</li>
                <li>Ngân hàng SHB bảo lãnh tiến độ và cho vay mua căn hộ</li>
                <li>Mua để ở, tự khai thác kinh doanh, ủy thác cho thuê…</li>
                <li>Nhập hộ khẩu, sử dụng mọi tiện ích dự án.</li>
              </ul>
              <div className="highlight">
                <span>Chi tiết &gt;&gt; Chính sách bán hàng Hạ Long Bay View</span>
              </div>
            </div>

            <div className="column">
              <h3>CHÍNH SÁCH ƯU ĐÃI TÀI CHÍNH</h3>
              <ul>
                <li>Căn hộ dịch vụ sở hữu vĩnh viễn (hometel)</li>
                <li>Đóng 30% nhận nhà, có thể cho thuê ngay chia sẻ lợi nhuận 90/10</li>
                <li>Hỗ trợ lãi suất 0% trong 2 năm</li>
                <li>Ân hạn nợ gốc trong 2 năm đầu</li>
                <li>Tỷ lệ Full phòng 80%</li>
                <li>Tỷ suất sinh lời từ 15-20% GTCH/năm</li>
              </ul>
              <div className="highlight">
                <span>
                  Chi tiết &gt;&gt; Chính sách ưu đãi tài chính Hạ Long Bay View
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
