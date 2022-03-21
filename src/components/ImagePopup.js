import React from "react";

function ImagePopup({ card, onClose }) {
  const popupClassName = `popup popup_type_pic ${card.link && "popup_opened"}`;
  return (
    <section className={popupClassName}>
      <div className="popup__overlay"></div>
      <div className="popup__pic-box">
        <button
          className="popup__exit-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__img"
          alt="полная версия выбранного фото"
          src={card.link}
        />
        <h2 className="popup__pic-title">{card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
