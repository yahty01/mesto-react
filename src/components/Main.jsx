import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.jsx";

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace } = props;

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([json, card]) => {
        setUserName(json.name);
        setUserDescription(json.about);
        setUserAvatar(json.avatar);
        setCards(card);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__profile-info">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img src={userAvatar} className="profile__avatar" alt="фото" />
          </button>
          <div className="profile__table">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
