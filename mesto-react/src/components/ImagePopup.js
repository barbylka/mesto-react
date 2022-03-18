import React from 'react';

function ImagePopup(props) {
  const className = `popup popup_type_pic ${props.card.link && 'popup_opened'}`
  return (
    <section className={className}>
      <div className="popup__overlay"></div>
      <div className="popup__pic-box">
        <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
        <img className="popup__img" alt="полная версия выбранного фото" src={props.card.link} />
        <h2 className="popup__pic-title">{props.card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup;