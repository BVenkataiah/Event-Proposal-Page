import React from "react";
import "./UserHeader.css";
import profilepic from "../../assets/images/mnt-prf.jpg";


const UserHeader = () => {
  return (
    <>
      <div id="navbar">
        <div id="nav-logo">LOGO</div>
        <div id="profile-section">
          <span id="profile-name">User Name</span>
          <span id="profile-photo">
            <img src={profilepic} alt="pic" id="pic-pro" />
          </span>
        </div>
      </div>

     
     
    </>
  );
};

export default UserHeader;