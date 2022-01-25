import React, {useState} from 'react';
import InputMask from "react-input-mask";

export default function Popup (props) {

    const [phone, setPhone] = useState('');

    function handlePhoneChange(evt) {
        setPhone(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdatePhone(phone)
    }

return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.close}>
        <div className="popup__container popup__container_cell_exchange">
            <button className="popup__close-icon" type="button" onClick={props.onClose} aria-label="закрыть">
                <svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg>
            </button>
            <form className="form" onSubmit={handleSubmit}>
                <h3 className="form__title">Перезвоните мне</h3>
                <p className="form__text">Наш менеджер перезвонит вам в течении 10 минут</p>
                <label className="form__label">
                    <InputMask className="form__input"
                        onChange={handlePhoneChange}
                        value={phone || ''}
                        name="phone" 
                        id="phone-input"
                        mask={'+7\\(999) 999-99-99'}
                        placeholder="+7 (___) ___-__-__"
                    />
                    <span className="form__input-error about-input-error"></span>
                </label>
                <button className="form__button" type="submit">Заказать услугу</button>
            </form>
        </div> 
    </div>
)
}