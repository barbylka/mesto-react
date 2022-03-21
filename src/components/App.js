import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfilePopup}
        onAddPlace={handleAddPlacePopup}
        onEditAvatar={handleEditAvatarPopup}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <label className="popup__field">
            <input
              type="text"
              id="name-input"
              required
              placeholder="Имя"
              value=""
              className="popup__text popup__text_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              readOnly
            />
            <span className="popup__text-error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              id="desc-input"
              required
              placeholder="О себе"
              value=""
              className="popup__text popup__text_type_description"
              name="about"
              minLength="2"
              maxLength="200"
              readOnly
            />
            <span className="popup__text-error desc-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <label className="popup__field">
            <input
              type="text"
              id="place-input"
              required
              placeholder="Название"
              value=""
              className="popup__text popup__text_type_place"
              name="name"
              minLength="2"
              maxLength="30"
              readOnly
            />
            <span className="popup__text-error place-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              id="link-input"
              required
              placeholder="Ссылка на картинку"
              value=""
              className="popup__text popup__text_type_link"
              name="link"
              readOnly
            />
            <span className="popup__text-error link-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__inputs">
          <label className="popup__field">
            <input
              type="url"
              id="avatar-input"
              required
              placeholder="Ссылка на новый аватар"
              value=""
              className="popup__text popup__text_type_avatar"
              name="avatar"
              readOnly
            />
            <span className="popup__text-error avatar-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
