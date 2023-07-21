import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import { api } from "../utils/api.js";
import AddPlacePopup from "./AddPlacePopup.jsx";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const buttonSubmitText = isLoading ? "Сохранение..." : "Сохранить";

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])

      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);
      })
      .catch(console.error);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((error) => {
        console.error("Произошла ошибка при изменении статуса лайка:", error);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const updatedCards = cards.slice().filter((c) => c !== card);
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Произошла ошибка при удалении карточки:", error);
      });
  }
  function handleUpdateUser(data) {
    setIsLoading(true);
    api.editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Произошла ошибка при обновлении профиля:", error);
      });
  }

  function handleUpdateAvatar(url) {
    api.changeAvatar(url)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.error("Произошла ошибка при обновлении аватара:", error);
      });
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.editCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Произошла ошибка при добавлении карточки:", error);
      });
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        /> 
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={buttonSubmitText}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={buttonSubmitText}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
