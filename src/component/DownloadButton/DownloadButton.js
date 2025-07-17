import React, { useState } from "react";
import "../DownloadButton/DownloadButton.scss";
import PopupForm from "./PopupForm"; 

export default function DownloadButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="download-fixed">
        <button className="download-button" onClick={() => setShowPopup(true)}>
          <i className="fas fa-file-download"></i>
          <span className="tooltip">Tải đầy đủ tài liệu dự án</span>
        </button>
      </div>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  );
}
