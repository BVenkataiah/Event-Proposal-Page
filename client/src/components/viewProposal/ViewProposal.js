import React from "react";
import searchicon from "../../assets/images/search.svg";
import pencil from "../../assets/images/pencil-edit-button.svg";
import bin from "../../assets/images/bin.svg";
import "./ViewProposal.css"
import VendorHeader from "../vendorHeader/VendorHeader";

const ViewProposal = () => {
  return (
    <>
    <VendorHeader />
    <div id="search-btn-bar">
        <div id="proposal-flex">
          <span id="proposal-text">Proposals</span>
          <img src={searchicon} alt="" id="search-icon" />
          <span id="src-prd">search products</span>
        </div>
        <div id="btn-side">
          <div id="create-btn">
            <button id="btn-one">CREATE</button>
          </div>
        </div>
      </div>

    <div className="proposal-list">
        <div id="event-name">EVENT NAME</div>
        <div id="event-description">Hello this event is For a marriage.</div>
        <div id="event-items">
          <span>Event Type</span>
          <span>Proposal Type</span>
          <span>From Date</span>
          <span>To Date</span>
          <span>Budget</span>
        </div>
        <div id="event-items-details">
          <div id="event-item-description">
            <span>Marriage</span>
            <span>Venue</span>
            <span>21-may-2023</span>
            <span>23-may-2023</span>
            <span>500000</span>
          </div>

          <div id="dlt-btn-bar">
            <img src={pencil} alt="edit" />
            <img src={bin} alt="delete" />
          </div>
        </div>
      </div>
     

        </>
  )
}

export default ViewProposal