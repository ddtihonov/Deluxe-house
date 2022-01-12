import PageCommercial from './PageCommercial';
import React, { useEffect } from 'react';
import img_1 from '../images/MoodFashion/img_1.png'
import img_2 from '../images/MoodFashion/img_2.png'
import img_3 from '../images/MoodFashion/img_3.png'
import img_4 from '../images/MoodFashion/img_4.png'
import img_5 from '../images/MoodFashion/img_5.png'
import img_6 from '../images/MoodFashion/img_6.png'
import img_7 from '../images/MoodFashion/img_7.png'
import img_8 from '../images/MoodFashion/img_8.png'
import img_9 from '../images/MoodFashion/img_9.png'
import img_10 from '../images/MoodFashion/img_10.png'
import img_11 from '../images/MoodFashion/img_11.png'
import img_12 from '../images/MoodFashion/img_12.png'
import img_13 from '../images/MoodFashion/img_13.png'
import img_14 from '../images/MoodFashion/img_14.png'

export default function MoodFashion () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageCommercial
            title="Дизайн бутика женской одежды MOOD FASHION"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Расположен в ТРЦ "Азия-Парк"</h2>
                <p className="paragraph__text">Интерьер дизайна бутика был выполнен в современном стиле с использованием натуральных материалов. Главной задачей дизайнера было вписаться в концепцию дизайна по франшизе</p>
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
                <h2 className="paragraph__title">Что необходимо учесть при проектировании бутиков?</h2>
                <p className="paragraph__text">Для того, что бы гармонично спроектировать интерьер торгового помещения, необходимо учесть большой объем нюансов:</p>
                <p className="paragraph__text">- количество выставляемого товара;</p>
                <p className="paragraph__text">- количество посетителей в ТРЦ;</p>
                <p className="paragraph__text">- количество посетителей бутика;</p>
                <p className="paragraph__text">- дизайн интерьера ТРЦ;</p>
                <p className="paragraph__text">- инженерные сети ТРЦ: электрические сети, вентиляция, пожарная система и т.д.;</p>
                <p className="paragraph__text">- план эвакуации и пожарная безопасность;</p>
                <p className="paragraph__text">- экологичность и современность материалов отделки;</p>
                <p className="paragraph__text">- особые требования бренда продаваемой продукции;</p>
                <p className="paragraph__text">- освещение общее ТРЦ, естественное освещение и влияние искусственного освещения на выставляемый товар.</p>
        </div>
        </>
    )}