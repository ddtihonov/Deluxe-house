import React from 'react';

export default function PopupOk ({close, onClose}) {

return (
    <div className='popup popup_opened' onClick={close}>
        <div className="popup__container popup__container_cell_exchange">
            <button className="popup__close-icon" type="button" onClick={onClose} aria-label="закрыть">
                <svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg>
            </button>
            <div className="form">
                <h3 className="popup__title">Спасибо что оставили заявку!</h3>
                <p className="popup__text">А пока вы ждете звонок, можете просмотреть наши лучшие проекты!</p>
                <p className="popup__subtitle">Мы создаем прекрасное!</p>
            </div>
        </div> 
    </div>
)
}