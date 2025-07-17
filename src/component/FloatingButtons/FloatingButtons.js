import React from "react";
import "../FloatingButtons/FloatingButtons.scss";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://m.me/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="messenger-button"
      >
        <i className="fab fa-facebook-messenger"></i>
        <span className="tooltip">Gửi tin nhắn ngay</span>
      </a>
    </div>
  );
}
