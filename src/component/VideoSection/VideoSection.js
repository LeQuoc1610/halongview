import React from "react";
import "../styles/VideoSection.scss";

function VideoSection() {
  return (
    <div className="video-section">
      <div className="content">
              <div className="video-container">
        <div className="video-wrapper">
          <h2 className="section-title"><p><span>VIDEO</span></p></h2>
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/BPalNSdUBnE"
              title="TVC Ramada by Wyndham Ha Long Bay View"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-wrapper">
          <h2 className="section-title">
            Ramada by Wyndham Halong Bay View – Bản tin tài chính VTV1
          </h2>
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/hkEYTa-dHnY"
              title="Ramada VTV1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="video-grid-section">
        <h2 className="section-title">Bản tin tài chính kinh doanh VTV1</h2>
        <div className="video-grid">
          <div className="video-item">
            <div className="iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/gsek0xno390"
                title="Căn hộ dịch vụ Hạ Long Bay View có nhiều lợi ích hơn khách sạn"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">
              Căn hộ dịch vụ Hạ Long Bay View có nhiều lợi ích hơn khách sạn
            </p>
          </div>

          <div className="video-item">
            <div className="iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/gVU-cdNZFOk"
                title="Sự khác biệt căn hộ dịch vụ và Airbnb"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">
              Sự khác biệt căn hộ dịch vụ và Airbnb
            </p>
          </div>

          <div className="video-item">
            <div className="iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/P6OagrPhXas"
                title="Service apartment là nhà của bạn"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">
              Service apartment là nhà của bạn
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VideoSection;
