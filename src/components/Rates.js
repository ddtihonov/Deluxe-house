import React from 'react';
import INTERIOR_DESIGN from '../images/ini/INTERIOR_DESIGN.png'

export default function Rates (props) {

    return (
    <section className="rates">
        <img className="label__rates" src={INTERIOR_DESIGN} alt="надпись"/>   
        <h2 className="title__smoll">Линейка тарифов</h2>
        <div className="line"></div>
        <ul className="table-smoll">
            <li className="rates__card">
                <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“LIGHT”</h3>
                </div>
                <h4 className="rates__title">5 000 тг/кв.м.</h4>
                <p className="rates__subtitle">ВЫ ПОЛУЧИТЕ:</p>
                <p className="rates__text">✔️ РАБОЧИЙ ПРОЕКТ:</p>
                <p className="rates__item">- План перепланировки;</p>
                <p className="rates__item">- План с расстановкой мебели;</p>
                <p className="rates__item">- План расстановки выходов электрических;</p>
                <p className="rates__item">- План расстановки приборов освещения;</p>
                <p className="rates__item">- План привязки приборов освещения к выключателям;</p>
                <p className="rates__item">- План теплых полов;</p>
                <p className="rates__item">- План привязки сантехнических приборов;</p>
                <p className="rates__item">- Карта напольных покрытий;</p>
                <p className="rates__item">- Развертка стен</p>
                <p className="rates__item">- Расчет расходуемых материалов чистовой отделки.</p>
                <button className="rates__button" onClick={props.openPopup} type="button" aria-label="заказать звонок">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“STANDART”</h3>
                </div>
                <h4 className="rates__title">8 000 тг/кв.м.</h4>
                <p className="rates__subtitle">ВЫ ПОЛУЧИТЕ:</p>
                <p className="rates__text">✔️ ЭСКИЗНЫЙ ПРОЕКТ с 3д-визуализацией всех помещений</p>
                <p className="rates__text">✔️ РАБОЧИЙ ПРОЕКТ - Все, что перечисленно в пакете "LIGHT" + дополнительно:</p>
                <p className="rates__item">- План кондиционирования;</p>
                <p className="rates__item">- План потолков;</p>
                <p className="rates__item">- Раскладка плитки;</p>
                <p className="rates__item">- Список рекомендуемых магазинов с учетом Вашего бюджета;</p>
                <p className="rates__item">- Контакты проверенных производителей мебели, элементов и конструкций интерьера.</p>
                <button className="rates__button" onClick={props.openPopup} type="button" aria-label="заказать звонок">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“BUSINESS”</h3>
                </div>
                <h4 className="rates__title">14 000 тг/кв.м.</h4>
                <p className="rates__subtitle">ВЫ ПОЛУЧИТЕ:</p>
                <p className="rates__text">✔️ ЭСКИЗНЫЙ ПРОЕКТ с 3д-визуализацией всех помещений</p>
                <p className="rates__text">✔️ РАБОЧИЙ ПРОЕКТ</p>
                <p className="rates__text">✔️ АВТОРСКИЙ НАДЗОР:</p>
                <p className="rates__item">- Консультация рабочей бригады с выездом дизайнера 2 раза в неделю с целью координации на соответствие с утвержденным Проектом.</p>
                <p className="rates__text">✔️ ПОДБОР МАТЕРИАЛОВ:</p>
                <p className="rates__item">- Подбор материалов чистовой отделки; - Подбор мебели, декора, текстиля и аксессуров интерьера в г. Астана.</p>
                <button className="rates__button" onClick={props.openPopup} type="button" aria-label="заказать звонок">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“VIP”</h3>
                </div>
                <h4 className="rates__title">20 000 тг/кв.м.</h4>
                <p className="rates__subtitle">ВЫ ПОЛУЧИТЕ:</p>
                <p className="rates__text">✔️ ЭСКИЗНЫЙ ПРОЕКТ с 3д-визуализацией всех помещений</p>
                <p className="rates__text">✔️ РАБОЧИЙ ПРОЕКТ</p>
                <p className="rates__text">✔️ АВТОРСКИЙ НАДЗОР:</p>
                <p className="rates__item">- Консультация рабочей бригады с выездом дизайнера 2 раза в неделю с целью координации на соответствие с утвержденным Проектом.</p>
                <p className="rates__text">✔️ ПОДБОР МАТЕРИАЛОВ:</p>
                <p className="rates__item">- Подбор материалов чистовой отделки;</p>
                <p className="rates__item">- Подбор мебели, декора, текстиля и аксессуров интерьера в г. Астана</p>
                <button className="rates__button" onClick={props.openPopup} type="button" aria-label="заказать звонок">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
        </ul>
    </section>
)
}