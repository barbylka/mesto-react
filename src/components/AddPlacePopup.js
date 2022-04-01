import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  function handleClose() {
    setName("");
    setLink("");

    onClose();
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__inputs">
        <label className="popup__field">
          <input
            type="text"
            id="place-input"
            required
            placeholder="Название"
            value={name}
            onChange={handleChangeName}
            className="popup__text popup__text_type_place"
            name="name"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__text-error place-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            id="link-input"
            required
            placeholder="Ссылка на картинку"
            value={link}
            onChange={handleChangeLink}
            className="popup__text popup__text_type_link"
            name="link"
          />
          <span className="popup__text-error link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
