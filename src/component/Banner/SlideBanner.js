import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/SlideBanner.scss";

function SidebarMenu({ isOpen, toggle }) {
  return (
    <>
      {isOpen && <div className="menu-overlay" onClick={toggle}></div>}

      {isOpen && (
        <div className="menu-close" onClick={toggle}>
          <i className="fas fa-times"></i>
        </div>
      )}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>TRANG CHỦ</li>
          <li>CHỦ ĐẦU TƯ</li>
          <li>VỊ TRÍ DỰ ÁN</li>
          <li>TỔNG QUAN DỰ ÁN</li>
          <li>TIỆN ÍCH DỰ ÁN</li>
          <li>CHÍNH SÁCH DỰ ÁN</li>
          <li>TIN TỨC</li>
          <li>LIÊN HỆ</li>
        </ul>
      </div>
    </>
  );
}

export default SidebarMenu;
