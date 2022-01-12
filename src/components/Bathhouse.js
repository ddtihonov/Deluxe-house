import PageHousing from "./PageHousing";
import React, { useEffect } from 'react';
import img_1 from '../images/Bathhouse/img_1.png'
import img_2 from '../images/Bathhouse/img_2.png'
import img_3 from '../images/Bathhouse/img_3.png'
import img_4 from '../images/Bathhouse/img_4.png'
import img_5 from '../images/Bathhouse/img_5.png'
import img_6 from '../images/Bathhouse/img_6.png'
import img_7 from '../images/Bathhouse/img_7.png'
import img_8 from '../images/Bathhouse/img_8.png'
import img_9 from '../images/Bathhouse/img_9.png'
import img_10 from '../images/Bathhouse/img_10.png'
import img_11 from '../images/Bathhouse/img_11.png'
import img_12 from '../images/Bathhouse/img_12.png'
import img_13 from '../images/Bathhouse/img_13.png'
import img_14 from '../images/Bathhouse/img_14.png'
import img_15 from '../images/Bathhouse/img_15.png'
import img_16 from '../images/Bathhouse/img_16.png'
import img_17 from '../images/Bathhouse/img_17.png'
import img_18 from '../images/Bathhouse/img_18.png'
import img_19 from '../images/Bathhouse/img_19.png'
import img_20 from '../images/Bathhouse/img_20.png'

export default function Bathhouse () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageHousing
            title="Дизайн банного комплекса со SPA"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Банный комплекс "Golden SPA"</h2>
                <p className="paragraph__text">Данный банный комплекс расположен на Коргальжинском шоссе. Общая его площадь составляет более 3000 кв.м. Дизайн интерьера сауны был выполнен в современном стиле. Сам банный комплекс представляет собой несколько досуговых помещений с индивидуальными зонами отдыха, бассейном, парилкой, хамамом, комнатой отдыха, караоке-комнатой или помещением для бильярда. А также общий холл и помещение кафе. Над банным комплексом были проработаны все этапы: от эскизов до сдачи "под ключ" с полным подбором материалов и декора.</p>
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
                    <li className="image__cell">
                        <img className="image__item" src={img_15} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_16} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_17} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_18} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_19} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_20} alt="эскиз"/>
                    </li>
                </ul>
                <h2 className="paragraph__title">Что учесть при проектировании бани?</h2>
                <p className="paragraph__text">При проектировании бани. банных комплексов и саун решающим фактором являются инженерные сети. Электроснабжение, водоснабжение, вентиляция, канализация и отопление дожны быть продуманы очень основательно и тщательно рассчитаны. Обычно схему инженерных сетей начинают разрабатывать после утверждения планировочного решения, и хорошо бы утвердить план с расстановкой мебели и оборудования. Тогда после того, как специалисты-инженера продумают все выводы инженерных сетей, мы приступаем к 3д-визуализации, с учетом возникающих на месте ригелей, балок, вентиляционных выходов приточки или вытяжки.</p>
        </div>
        </>
    )}