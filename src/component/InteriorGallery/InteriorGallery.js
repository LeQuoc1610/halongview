import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../scss/InteriorGallery.scss";
import img1 from "../image/tk01.jpg";
import img2 from "../image/tk02.jpg";
import img3 from "../image/tk03.jpg";
import img4 from "../image/tk04.jpg";
import img5 from "../image/tk05.jpg";

const InteriorGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];
  const slides = images.map((src) => ({ src }));

  return (
    <div className="interior-gallery-section">
      <div className="gallery-content">
        <div className="gallery-title-wrapper">
          <div className="interior-main-title">
            <div className="line"></div>
            <h1 className="title-text">THIẾT KẾ NỘI THẤT</h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="gallery-wrapper">
          <div style={{ width: "60.5rem", margin: "0 auto" }}>
            <div className="interior-gallery-grid">
              <div className="main-image-wrapper">
                <div
                  className="interior-large-image"
                  style={{ backgroundImage: `url(${images[0]})` }}
                  onClick={() => {
                    setPhotoIndex(0);
                    setIsOpen(true);
                  }}
                ></div>
              </div>

              <div className="thumbnail-grid-wrapper">
                <div className="interior-thumbnail-grid">
                  {images.slice(1).map((img, index) => (
                    <div
                      key={index}
                      className="thumbnail-item"
                      style={{ backgroundImage: `url(${img})` }}
                      onClick={() => {
                        setPhotoIndex(index + 1);
                        setIsOpen(true);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </div>
  );
};

export default InteriorGallery;
