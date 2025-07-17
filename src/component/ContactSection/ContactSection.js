import React from "react";
import "../styles/ContactSection.scss";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="overlay"></div>

      <div className="contact-content">
        <div className="contact-btn-icon">
            <div className="contact-icon">
          <i className="fas fa-comments"></i>
        </div>
        </div>
        <div className="contact-title">
          Liên hệ với chúng tôi ngay hôm nay để được các chuyên gia tư vấn cụ thể nhất về dự án.
        </div>

        <form>
          <input type="text" placeholder="Nhập tên của bạn" />
          <input type="text" placeholder="Nhập số điện thoại" />
          <input type="email" placeholder="Nhập địa chỉ email" />
          <div className="btn-submit">
            <button type="submit" className="submit-btn">
            NHẬN THÔNG TIN
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
