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
        <div className="banner-container">
          <div className="banner-left">
            <div className="menu-icon-circle" onClick={this.toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>

          <div className="banner-center">
          </div>

          <div className="banner-right">
            <div className="right">
               <i className="fas fa-phone-alt"></i>
            <p>1900 636 648</p>
            </div>
          </div>
        </div>

        <SidebarMenu isOpen={this.state.isMenuOpen} toggle={this.toggleMenu} />
      </>
    );
  }
}

export default Banner;
