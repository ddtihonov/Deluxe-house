import PageHousing from "./PageHousing";
import React, { useEffect } from 'react';
import img_1 from '../images/HeavenAstana/img_1.png'
import img_2 from '../images/HeavenAstana/img_2.png'
import img_3 from '../images/HeavenAstana/img_3.png'
import img_4 from '../images/HeavenAstana/img_4.png'
import img_5 from '../images/HeavenAstana/img_5.png'
import img_6 from '../images/HeavenAstana/img_6.png'
import img_7 from '../images/HeavenAstana/img_7.png'
import img_8 from '../images/HeavenAstana/img_8.png'
import img_9 from '../images/HeavenAstana/img_9.png'
import img_10 from '../images/HeavenAstana/img_10.png'
import img_11 from '../images/HeavenAstana/img_11.png'
import img_12 from '../images/HeavenAstana/img_12.png'
import img_13 from '../images/HeavenAstana/img_13.png'
import img_14 from '../images/HeavenAstana/img_14.png'

export default function HeavenAstana () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageHousing
            title="Дизайн гостевого дома 'Heaven Astana'"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Стиль дизайна интерьера - современный</h2>
                <p className="paragraph__text">Заказчики хотели сделать квартиру просторнее и светлее, при этом создать легкий намек на роскошь, используя стиль "неоклассика". Основной задачей был ограниченный бюджет, поэтому самым сложным было подобрать исполнителей по производству и монтажу мебели, а так же подбор всех остальных материалов отделки и декора. Сам ремонт квартиры был сделан в рекордно сжатые сроки, в дизайне мы учли самое главное именно для этого проекта - легкость исполнения ремонтных работ, экономичность исполнения всех этапов. В итоге мы не просто уложились в сроки и в бюджет, но и удивили своих заказчиков ненавязчивой роскошью и шиком!</p>
                <h2 className="title__smoll">Галерея проекта</h2>
                <div className="line"></div>
                <ul className='image__box'>
                    <li className="image__cell">
                        <img className="image__item" src={img_1} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_2} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_3} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_4} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_5} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_6} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_7} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_8} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_9} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_10} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_11} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_12} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_13} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_14} alt="эскиз"/>
                    </li>
                </ul>
                <h2 className="paragraph__title">Какие помещения мы проектируем?</h2>
                <p className="paragraph__text">Мы можем взяться за помещение любого назначения. Это могут быть и бани, и рестораны и кафе, Лаунж-бары, офисы и Бизнес-Центры, холлы и ресепшн-зоны, гостиницы, SPA, фитнес-залы, салоны красоты, магазины и бутики, стоматологические и другие медицинские заведения. Так же мы разрабатываем проекты для торговых островком, летних кафе, архитектурных элементов, таких как входная группа с вывеской.</p>
        </div>
        </>
    )}