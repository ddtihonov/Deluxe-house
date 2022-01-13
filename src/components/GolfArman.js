import PageCommercial from './PageCommercial';
import React, { useEffect } from 'react';
import img_1 from '../images/GolfArman/img_1.png'
import img_2 from '../images/GolfArman/img_2.png'
import img_3 from '../images/GolfArman/img_3.png'
import img_4 from '../images/GolfArman/img_4.png'
import img_5 from '../images/GolfArman/img_5.png'
import img_6 from '../images/GolfArman/img_6.png'
import img_7 from '../images/GolfArman/img_7.png'
import img_8 from '../images/GolfArman/img_8.png'


export default function GolfArman () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageCommercial
            title="Дизайн-проект помещения для игры в гольф"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Дизайн-проект помещения для игры в гольф</h2>
                <p className="paragraph__text">Помещение офисное располагается в Бизнес-Центре "Арман" по ул. Сарыарка 6. Был разработан Эскизный Проект, Рабочий Проект и произведен Авторский надзор с полным подбором материалов. Симулятор для игры в гольф позволяет играть в любимую игру в любое время года!</p>
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
                </ul>
                <h2 className="paragraph__title">Проектирование помещений общественного назначения</h2>
                <p className="paragraph__text">Каким бы ни было целевое использование помещения, будь то медицинские услуги, косметология или что-либо другое, если помещение требует разработку дизайн, который бы производил важное впечатление на его посетителей, мы всегда можем продумать проект детально.</p>
                <p className="paragraph__text">Здесь важную роль играет целый комплекс условий:</p>
                <p className="paragraph__text">- Портрет посетителей помещения;</p>
                <p className="paragraph__text">- Планировочное решение;</p>
                <p className="paragraph__text">- Инженерные сети;</p>
                <p className="paragraph__text">- Бюджет, запланированный на ремонт, мебель декор;</p>
                <p className="paragraph__text">- Уровень естественного освещения;</p>
                <p className="paragraph__text">- Стиль дизайна интерьера;</p>
                <p className="paragraph__text">- Услуги, которые будут в помещении предоставляться;</p>
                <p className="paragraph__text">- Количество обслуживающего персонала;</p>
                <p className="paragraph__text">- Количество посетителей;</p>
                <p className="paragraph__text">- Пожарные и санитарные нормы.</p>
                <p className="paragraph__text">Если Вы затрудняетесь определиться в каком-либо параметре, Вы всегда можете положиться на то, что дизайнеры предоставят Вам комплексную консультацию!</p>
        </div>
        </>
    )}