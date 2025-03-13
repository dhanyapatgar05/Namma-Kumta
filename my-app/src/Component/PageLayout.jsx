import React from "react";
import {  FaStar,   FaArrowLeft } from "react-icons/fa";
import { IoIosCall, IoIosSearch, IoIosAddCircleOutline   } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { MdLightbulbOutline } from "react-icons/md";
import { TfiBell } from "react-icons/tfi";
import { LuUserRound } from "react-icons/lu";
import { IoGlobeOutline } from "react-icons/io5";
import "./PageLayout.css";

const PageLayout = () => {
  const images = [
    "https://www.beryllgroup.com/img/projects/Rainbow-Hospital-Marathalli/thumbs/Rainbow.jpg", // First card  image
    "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg",
    "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg",
    "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg",
    "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg" 
  ];
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="https://png.pngtree.com/png-clipart/20241101/original/pngtree-beach-logo-design-inspiration-sunset-coconut-trees-palms-on-the-vector-png-image_16577598.png" alt="Logo" className="logo" />
          <span className="header-title">Namma Kumata</span>
        </div>
        <div className="header-icons">
          <TfiBell   className="icon" />
          <LuUserRound  className="icon" />
          <IoGlobeOutline  className="icon" />
        </div>
      </header>
      {/* Subheader */}
      <div className="subheader">
        <div className="subheader-left">
          <FaArrowLeft className="back-icon" />
          <h2>Cardiologists</h2>
        </div>
      </div>
      {/* Main Content (Scrollable) */}
      <main className="main-content">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt="Hospital" className="card-image" />
            <div className="card-details">
              <div className="card-info">
                <p><IoIosCall className="icon" /> +91 9876543210</p>
                <div className="rating-container">
                  <div className="rating-box">
                    <span className="rating-text">4.5</span><FaStar className="star-icon" />
                  </div>
                </div>
              </div>
              <div className="button-container">
              <button className="details-button">More details</button>
            </div>
            </div>
            
          </div>
        ))}
      </main>
      {/* Bottom Navigation (Fixed) */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <FiHome  className="nav-icon" />
          <span className="nav-label">Home</span>
        </div>
        <div className="nav-item">
          <IoIosSearch  className="nav-icon" />
          <span className="nav-label">Search</span>
        </div>
        <div className="nav-item">
          <IoIosAddCircleOutline  className="nav-icon" />
          <span className="nav-label">Add/Join</span>
        </div>
        <div className="nav-item">
          <MdLightbulbOutline className="nav-icon" />
          <span className="nav-label">Alerts</span>
        </div>
      </nav>
    </div>
  );
};

export default PageLayout;
