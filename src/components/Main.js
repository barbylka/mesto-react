import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Данные не загрузились: ${err}`);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Карточки не загрузились: ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__image"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div className="profile__container">
          <div className="profile__cont-info">
            <h1 className="profile__cont-info-name">{userName}</h1>
            <p className="profile__cont-info-description">{userDescription}</p>
          </div>
          <button
            className="profile__button profile__button_type_edit"
            onClick={onEditProfile}
            type="button"
          ></button>
        </div>
        <button
          className="profile__button profile__button_type_add"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>

      <section className="places" aria-label="список картинок">
        <ul className="places__items">
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
