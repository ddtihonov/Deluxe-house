import React, { useState } from 'react';

export default function Time () {

    const [isDataOpen, setIsDataOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    function openData () {
        setIsDataOpen(true)
        setIsOpen(false)
    }

    function closeData () {
        setIsDataOpen(false)
        setIsOpen(true)
    }

    return (
        <section className="time">
            <div className="time__box">
                <button className="time__button" type="button" aria-label="закрыть-открыть" onClick={openData}>Ремонт без дизайна со стандартным ремонтом</button>
                <button className="time__button" type="button" aria-label="закрыть-открыть" onClick={closeData}>Ремонт с дизайном и нестандартным ремонтом</button>
            </div>
            <ul className={`time__list ${isDataOpen ? 'active' : ''}`}>
                <li className="time__item">
                    <div className="time__cell">
                        <p className="time__subtitle">Площадь, м2</p>
                    </div>
                    <p className="time__text">50-80</p>
                    <p className="time__text">80-120</p>
                    <p className="time__text">120-200</p>
                    <p className="time__text">200+</p>
                </li>
                <li className="time__item time__item_light">
                    <div className="time__cell">
                        <p className="time__subtitle">Черновая отделка</p>
                    </div>
                    <p className="time__text">2 мес</p>
                    <p className="time__text">2.5 мес</p>
                    <p className="time__text">3 мес</p>
                    <p className="time__text">3.5-5 мес</p>
                </li>
                <li className="time__item">
                    <div className="time__cell">
                        <p className="time__subtitle">Предчистовая (улучшенная черновая)</p>
                    </div>
                    <p className="time__text">1.5 мес</p>
                    <p className="time__text">2 мес</p>
                    <p className="time__text">2.5 мес</p>
                    <p className="time__text">3-4 мес</p>
                </li>
                <li className="time__item time__item_light">
                    <div className="time__cell">
                        <p className="time__subtitle">Вторичное жилье с демонтажными работами</p>
                    </div>
                    <p className="time__text">3 мес</p>
                    <p className="time__text">3.5 мес</p>
                    <p className="time__text">4 мес</p>
                    <p className="time__text">5-6 мес</p>
                </li>
            </ul>
            <ul className={`time__list ${isOpen ? 'active' : ''}`}>
                <li className="time__item">
                    <div className="time__cell">
                        <p className="time__subtitle">Площадь, м2</p>
                    </div>
                    <p className="time__text">50-80</p>
                    <p className="time__text">80-120</p>
                    <p className="time__text">120-200</p>
                    <p className="time__text">200+</p>
                </li>
                <li className="time__item time__item_light">
                    <div className="time__cell">
                        <p className="time__subtitle">Черновая отделка</p>
                    </div>
                    <p className="time__text">2.5 мес</p>
                    <p className="time__text">3 мес</p>
                    <p className="time__text">4 мес</p>
                    <p className="time__text">5-6 мес</p>
                </li>
                <li className="time__item">
                    <div className="time__cell">
                        <p className="time__subtitle">Предчистовая (улучшенная черновая)</p>
                    </div>
                    <p className="time__text">2 мес</p>
                    <p className="time__text">2.5 мес</p>
                    <p className="time__text">3-4 мес</p>
                    <p className="time__text">4-5 мес</p>
                </li>
                <li className="time__item time__item_light">
                    <div className="time__cell">
                        <p className="time__subtitle">Вторичное жилье с демонтажными работами</p>
                    </div>
                    <p className="time__text">4 мес</p>
                    <p className="time__text">5 мес</p>
                    <p className="time__text">5-6 мес</p>
                    <p className="time__text">6-7 мес</p>
                </li>
            </ul>
        </section>                          
)
}