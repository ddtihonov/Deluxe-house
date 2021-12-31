import React from 'react';

export default function Popup (props) {

return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.close}>
        <div className="popup__container popup__container_cell_exchange">
            <button className="popup__close-icon" type="button" onClick={props.onClose} aria-label="закрыть">
                <svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg>
            </button>
            <form className="form">
                <h2 className="form__title">Перезвоните мне</h2>
                <p className="form__text">Наш менеджер перезвонит вам в течении 10 минут</p>
                <label className="form__label">
                    <input className="form__input"
                    type="tel" 
                    name="about" 
                    id="about-input" 
                    placeholder="+7(___)___-__-__"  
                    minLength="2" 
                    maxLength="200" required/>
                    <span className="form__input-error about-input-error"></span>
                </label>
                <button className="form__button" type="submit">Заказать услугу</button>
            </form>
        </div> 
    </div>
)
}