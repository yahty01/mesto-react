
import "./App.css";
import Header from "./Header.jsx";

function App() {
  return (
    <body className="page">
      <Header />
      
      <main className="content">
        <section className="profile">
          <div className="profile__profile-info">
            <button type="button" className="profile__avatar-button">
              <img
                src="<%=require('./images/avatar1.jpg')%>"
                className="profile__avatar"
                alt="фото"
              />
            </button>
            <div className="profile__table">
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="card-items"></section>
      </main>

      <footer className="footer">
        <h2 className="footer__author">&copy; 2023 Mesto Russia</h2>
      </footer>

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button
            className="popup__close-button popup__close-button_type_profile"
            type="button"
          ></button>
          <form
            className="form form_type_profile"
            name="editProfile"
            novalidate
          >
            <h2 className="form__title form__title_type_profile">
              Редактировать профиль
            </h2>
            <input
              type="text"
              placeholder="Ваше имя"
              className="form__input form__input_type_name"
              name="profileName"
              id="profileName"
              minlength="2"
              maxlength="40"
              required
              autocomplete="off"
            />
            <span id="error-profileName" className="form__error">
              hhgfg
            </span>
            <input
              type="text"
              placeholder="Ваша профессия"
              className="form__input form__input_type_job"
              name="profileJob"
              id="profileJob"
              minlength="2"
              maxlength="200"
              required
              autocomplete="off"
            />
            <span id="error-profileJob" className="form__error"></span>
            <button
              type="submit"
              className="form__submit form__submit_type_profile"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_cards">
        <div className="popup__cards-container">
          <button
            className="popup__close-button popup__close-button_type_card"
            type="button"
          ></button>
          <form className="form form_type_cards" name="addCards" novalidate>
            <h2 className="form__title form__title_type_cards">Новое место</h2>
            <input
              type="text"
              placeholder="Название"
              className="form__input form__input_type_title"
              name="profileTitle"
              id="profileTitle"
              minlength="2"
              maxlength="30"
              required
              autocomplete="off"
            />
            <span id="error-profileTitle" className="form__error"></span>
            <input
              type="URL"
              placeholder="Ссылка на картинку"
              className="form__input form__input_type_link"
              name="profileLink"
              id="profileLink"
              minlength="2"
              required
            />
            <span id="error-profileLink" className="form__error"></span>
            <button
              type="submit"
              className="form__submit form__submit_type_cards"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__delete-card-container">
          <button
            className="popup__close-button popup__close-button_type_delete-card"
            typy="button"
          ></button>
          <form className="form form_type_delete-card">
            <h2 className="form__title form__title_type_delete">Вы уверены?</h2>
            <button
              type="submit"
              className="form__submit form__submit_type_delete-card"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <button
            className="popup__close-button popup__close-button_type_image"
            type="button"
          ></button>
          <img className="popup__image-card" />
          <h2 className="popup__image-title">Домбай</h2>
        </div>
      </div>

      <div className="popup popup_type_update-avatar">
        <div className="popup__update-avatar-container">
          <button
            className="popup__close-button popup__close-button_type_update-avatar"
            typy="button"
          ></button>
          <form
            className="form form_type_update-avatar"
            name="addCards"
            novalidate
          >
            <h2 className="form__title form__title_type_update-avatar">
              Обновить аватар
            </h2>
            <input
              type="URL"
              placeholder="Ссылка на картинку"
              className="form__input form__input_type_update-avatar"
              name="AvatarLink"
              id="AvatarLink"
              minlength="2"
              required
            />
            <span id="error-AvatarLink" className="form__error"></span>
            <button
              type="submit"
              className="form__submit form__submit_type_update-avatar"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template id="template__elements">
        <div className="card-item">
          <div className="card-item__images">
            <img className="card-item__img" />
            <img
              src="<%=require('./images/trash.svg')%>"
              className="card-item__trash"
              alt="удалить"
            />
          </div>
          <div className="card-item__content">
            <h2 className="card-item__title"></h2>
            <div className="card-item__like">
              <button
                type="button"
                className="card-item__like_type_button"
              ></button>
              <div className="card-item__like_type_number">1</div>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
