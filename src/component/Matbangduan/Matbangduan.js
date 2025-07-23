import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Matbangduan.scss";

import mb4_14_19_25 from "../image/mb-4-14-19-25-1140x800.jpg";
import mb16_18 from "../image/mb-6-18-1144x800.jpg";
import mb27_30 from "../image/mb-27-30-1132x800.jpg";
import mb31_33 from "../image/mb-31-33-1133x800.jpg";

class Matbangduan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "4-14-19-25",
      isModalOpen: false,
      currentModalImage: "",
    };

    this.tabData = {
      "4-14-19-25": {
        displayName: "Tầng 4-14 & 19-25",
        title: "MẶT BẰNG TẦNG 4-14 & 19-25",
        mainImage: mb4_14_19_25,
      },
      "16-18": {
        displayName: "Tầng 16-18",
        title: "MẶT BẰNG TẦNG 16-18",
        mainImage: mb16_18,
      },
      "27-30": {
        displayName: "Tầng 27-30",
        title: "MẶT BẰNG TẦNG 27-30",
        mainImage: mb27_30,
      },
      "31-33": {
        displayName: "Tầng 31-33",
        title: "MẶT BẰNG TẦNG 31-33",
        mainImage: mb31_33,
      },
    };
  }

  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });
  };

  openModal = (imageSrc) => {
    this.setState({ isModalOpen: true, currentModalImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, currentModalImage: "" });
  };

  render() {
    const { activeTab, isModalOpen, currentModalImage } = this.state;
    const currentData = this.tabData[activeTab];

    return (
      <div className="matbangcontent">
        <div className="matbang-section">
          <div className="matbang-wrapper">
            <h1 className="matbang-main-title">MẶT BẰNG DỰ ÁN</h1>

            <div className="matbang-tabs-nav">
              {Object.keys(this.tabData).map((tabName) => (
                <div
                  key={tabName}
                  className={`tab-item ${
                    activeTab === tabName ? "active" : ""
                  }`}
                  onClick={() => this.handleTabClick(tabName)}
                >
                  {this.tabData[tabName].displayName}
                </div>
              ))}
            </div>

            <div className="matbang-content-wrapper">
              <div className="matbang-center-image">
                <div className="matbang-image-display">
                  {currentData.mainImage && (
                    <img
                      src={currentData.mainImage}
                      alt={currentData.title}
                      onClick={() => this.openModal(currentData.mainImage)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {isModalOpen && (
          <div className="matbang-modal-overlay" onClick={this.closeModal}>
            <div
              className="matbang-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="matbang-modal-close" onClick={this.closeModal}>
                &times;
              </span>
              <img
                src={currentModalImage}
                alt="Mặt bằng chi tiết"
                className="matbang-modal-image"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Matbangduan;
