import PageCommercial from './PageCommercial';
import React, { useEffect } from 'react';
import img_1 from '../images/Garderob/img_1.png'
import img_2 from '../images/Garderob/img_2.png'
import img_3 from '../images/Garderob/img_3.png'
import img_4 from '../images/Garderob/img_4.png'
import img_5 from '../images/Garderob/img_5.png'
import img_6 from '../images/Garderob/img_6.png'
import img_7 from '../images/Garderob/img_7.png'
import img_8 from '../images/Garderob/img_8.png'
import img_9 from '../images/Garderob/img_9.png'
import img_10 from '../images/Garderob/img_10.png'

export default function Garderob () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageCommercial
            title="Бутик женской одежды Garderob AS"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Расположен в ТРЦ "Евразия"</h2>
                <p className="paragraph__text">Интерьер помещения бутика женской одежды был выполнен в современном стиле с уклоном на "гламурную" тематику с использованием латуни, искусственной зелени и цветов. Задачей было поставлено оформить пространство так, чтобы не потерять объемы выставленной продукции, но увеличить визуально пространство, учесть зону для отдыха и ожидания.</p>
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
                </ul>
                <h2 className="paragraph__title">Визуальное восприятие дизайна торговых помещений</h2>
                <p className="paragraph__text">Продумывая дизайн торговых помещений мы учитываем очень большое число факторов, влияющих на восприятие будущих покупателей. самая главная задача дизайна торговых помещений - побуждать посетителей совершить покупку. Можете быть уверены, что с нашей командой Вы создадите действительно успешное торговое место!</p>
        </div>
        </>
    )}