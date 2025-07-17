import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../CanhoMau/CanhoMau.scss";

import b404_1 from "../img2/b4-04-1.jpg";
import b406_2 from "../img2/b4-06-2.jpg";
import b408_3 from "../img2/b4-08-3.jpg";

const CanhoMau = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (img) => {
    setIsModalOpen(true);
    setCurrentImage(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="canho-mau-container">
      <h1 className="canho-main-title">CĂN HỘ MẪU HẠ LONG BAY VIEW</h1>
      <div className="canho-wrapper">
        <div className="canho-img" onClick={() => openModal(b404_1)}>
          <img src={b404_1} alt="Căn hộ A4-04" />
          <h3>A4-04</h3>
        </div>
        <div className="canho-img" onClick={() => openModal(b406_2)}>
          <img src={b406_2} alt="Căn hộ B4-06" />
          <h3>B4-06</h3>
        </div>
        <div className="canho-img" onClick={() => openModal(b408_3)}>
          <img src={b408_3} alt="Căn hộ B4-08" />
          <h3>B4-08</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="canho-modal-overlay" onClick={closeModal}>
          <div className="canho-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="canho-modal-close" onClick={closeModal}>
              &times;
            </span>
            <img src={currentImage} alt="Preview" className="canho-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CanhoMau;
