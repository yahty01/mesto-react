import React from "react";
import trash from "../images/trash.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="place">
      <div className="place__images">
        <img
          className="place__img"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        <img src={trash} className="place__trash" alt="удалить" />
      </div>
      <div className="place__content">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__like">
          <button type="button" className="place__like_type_button"></button>
          <div className="place__like_type_number">
            {props.card.likes.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
