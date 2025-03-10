import React from "react";
import { FaPhone, FaStar, FaHome, FaSearch, FaPlusCircle } from "react-icons/fa";
import { TfiBell } from "react-icons/tfi";
import { LuUserRound } from "react-icons/lu";
import { IoGlobeOutline } from "react-icons/io5";
import "./PageLayout.css";

const PageLayout = () => {
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
    </div>
  );
};

export default PageLayout;
