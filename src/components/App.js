import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="profile"
        buttonText="Сохранить"
        children={
          <>
            <input
              type="text"
              placeholder="Ваше имя"
              className="form__input form__input_type_name"
              name="profileName"
              id="profileName"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            />
            <span id="error-profileName" className="form__error"></span>
            <input
              type="text"
              placeholder="Ваша профессия"
              className="form__input form__input_type_job"
              name="profileJob"
              id="profileJob"
              minLength="2"
              maxLength="200"
              required
              autoComplete="off"
            />
            <span id="error-profileJob" className="form__error"></span>
          </>
        }
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="cards"
        buttonText="Создать"
        children={
          <>
            <input
              type="text"
              placeholder="Название"
              className="form__input form__input_type_title"
              name="profileTitle"
              id="profileTitle"
              minLength="2"
              maxLength="30"
              required
              autoComplete="off"
            />
            <span id="error-profileTitle" className="form__error"></span>
            <input
              type="URL"
              placeholder="Ссылка на картинку"
              className="form__input form__input_type_link"
              name="profileLink"
              id="profileLink"
              minLength="2"
              required
            />
            <span id="error-profileLink" className="form__error"></span>
          </>
        }
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="update-avatar"
        buttonText="Создать"
        children={
          <>
            <input
              type="URL"
              placeholder="Ссылка на картинку"
              className="form__input form__input_type_update-avatar"
              name="AvatarLink"
              id="AvatarLink"
              minLength="2"
              required
            />
            <span id="error-AvatarLink" className="form__error"></span>
          </>
        }
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        buttonText="Да"
        onClose={closeAllPopups}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
