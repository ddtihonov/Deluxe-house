import PageHousing from "./PageHousing";
import React, { useEffect } from 'react';
import img_1 from '../images/RayResidence/img_1.png'
import img_2 from '../images/RayResidence/img_2.png'
import img_3 from '../images/RayResidence/img_3.png'
import img_4 from '../images/RayResidence/img_4.png'
import img_5 from '../images/RayResidence/img_5.png'
import img_6 from '../images/RayResidence/img_6.png'
import img_7 from '../images/RayResidence/img_7.png'
import img_8 from '../images/RayResidence/img_8.png'

export default function RayResidence () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageHousing
            title="Дизайн квартиры в ЖК 'Ray Residence'"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Стиль интерьера был выбран неоклассический</h2>
                <p className="paragraph__text">Большой квартире требовалась грамотная перепланировка и зонирование пространства. Проработано было все: от планировки, до расстановки деталей интерьера "под ключ". Пространство каждого отдельного помещения было продумано с учетом индивидуальных пожеланий каждого члена семьи, каждый из которого желал окружить себя своим особым комфортом. Связующим звеном в таком разнообразии всегда являются помещения общего пользования: гостиная, кухня, холл, для этих помещений был ноеклассический стиль интерьера с легкими элементами модерна и ар-деко, что хорошо гармонирует с таким разнообразием и это придало особую изюминку их жилому пространству.</p>
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
                <h2 className="paragraph__title">Можете ли Вы самостоятельно купить мебель и материлы, заказав только Дизайн-Проект?</h2>
                <p className="paragraph__text">Мы разрабатываем полный дизайн-проект, включающий в себя ведомость материалов. В ведомости к дизайн-проекту мы указываем все необходимые отделочные материалы, сантехнику, мебель и предметы декора с ценами, артикулом и полезной ссылкой. Мы так же предоставляем различные альтернативные источники материалов с указанием преимуществ по цене и качеству. Все товары вы можете приобрести как самостоятельно, так и с нашей помощью. Мы предложим специальные цены от наших партнеров.</p>
        </div>
        </>
    )}