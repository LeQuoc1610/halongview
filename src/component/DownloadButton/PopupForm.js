import React from "react";
import "../DownloadButton/DownloadButton.scss";

export default function PopupForm({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>
          ĐĂNG KÝ NHẬN
          <br />
          THÔNG TIN DỰ ÁN
        </h2>
        <p>
          Quý khách vui lòng điền thông tin bên dưới.
          <br />
          Chúng tôi sẽ thông tin lại Quý khách sớm nhất!
        </p>
        <form>
          <input type="email" placeholder="Địa chỉ email" required />
          <input type="text" placeholder="Họ tên" required />
          <input type="tel" placeholder="Số điện thoại" required />
          <button type="submit" className="submit-btn">Đăng ký ngay</button>
        </form>
        <p className="support-text">
          Hỗ trợ 24/7. Thông tin chính xác từ chủ đầu tư.
        </p>
      </div>
    </div>
  );
}
