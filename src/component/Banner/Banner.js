import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../scss/Banner.scss";
import SidebarMenu from "../Banner/SlideBanner";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <>
        <div className="banner">
          <div className="banner-container">
            <div className="banner-group">
              <div className="bentrai">
                <div className="banner-left">
                  <div className="menu-icon-circle" onClick={this.toggleMenu}>
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="banner-center">
                  <div className="logo-img"></div>
                </div>
              </div>
              <div className="benphai">
                <div className="banner-right">
                  <div className="right">
                    <i className="fas fa-phone-alt"></i>
                    <p>1900 636 648</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidebarMenu isOpen={this.state.isMenuOpen} toggle={this.toggleMenu} />
      </>
    );
  }
}

export default Banner;
