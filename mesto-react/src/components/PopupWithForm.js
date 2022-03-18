import React from 'react';

function PopupWithForm(props) {
  const className = `popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`
  const formName = `popup__container popup__container_type_${props.name}`

  return (
    <section className={className}>
      <div className="popup__overlay"></div>
      <form className={formName} name={`${props.name}`} noValidate>
        <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{`${props.title}`}</h2>
        {props.children}
        <button className="popup__save-button" type="submit">Сохранить</button>
      </form>
    </section>
  )
}

export default PopupWithForm;
