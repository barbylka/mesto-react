import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="places__item">
      <button className="places__delete" type="button"></button>
      <img className="places__img" alt="фото, которое загрузил пользователь" src={props.card.link} onClick={handleClick} />
      <div className="places__description">
        <h2 className="places__title">{props.card.name}</h2>
        <div className="places__likes">
          <button className="places__like" type="button"></button>
          <span className="places__like-number">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )

}

export default Card;