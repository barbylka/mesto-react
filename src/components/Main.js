import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api'
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => {
        console.log(`Данные не загрузились: ${err}`)
      })
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(`Карточки не загрузились: ${err}`)
      })
  }, [])

  return (

    <main>

      <section className="profile">
        <div className="profile__image" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__container">
          <div className="profile__cont-info">
            <h1 className="profile__cont-info-name">{userName}</h1>
            <p className="profile__cont-info-description">{userDescription}</p>
          </div>
          <button className="profile__button profile__button_type_edit" onClick={props.onEditProfile} type="button"></button>
        </div>
        <button className="profile__button profile__button_type_add" onClick={props.onAddPlace} type="button"></button>
      </section>

      <section className="places" aria-label="список картинок">
        <ul className="places__items">

          {cards.map((card, i) => {
            return (
              < Card card={card} key={card._id} onCardClick={props.onCardClick} />
            )
          })}

        </ul>
      </section>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
      />

    </main>
  )
}

export default Main;