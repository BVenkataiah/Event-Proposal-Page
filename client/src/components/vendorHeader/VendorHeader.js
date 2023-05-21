import React from "react";
import "./VendorHeader.css";
import profilepic from "../../assets/images/mnt-prf.jpg";


const VendorHeader = () => {
  return (
    <>
      <div id="navbar">
        <div id="nav-logo">LOGO</div>
        <div id="profile-section">
          <span id="profile-name">Vendor Name</span>
          <span id="profile-photo">
            <img src={profilepic} alt="pic" id="pic-pro" />
          </span>
        </div>
      </div>

     
     
    </>
  );
};

export default VendorHeader;