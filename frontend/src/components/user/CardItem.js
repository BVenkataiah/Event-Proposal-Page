import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/carditem.css"




const CardItem = ({ key,id,imageSrc, title, price, locatioin }) => {
  const navigate = useNavigate();

  const EventHandler = () => {
    navigate(`/user/proposals/${id}`);
  };

  return (
    <div className="carditemss">
    <div className="card-item" onClick={EventHandler}>
      <img className="card-img" src={`https://eventproposalpage-0e8x.onrender.com/proposal/images/${imageSrc}`} alt={title} />
      <p className="card-name">{title}</p>
      <p className="card-price">{price}/-</p>
      <span className="card-location">{locatioin}</span>
    </div>
    </div>
  );
};

export default CardItem;