import PageHousing from "./PageHousing";
import React, { useEffect } from 'react';
import img_1 from '../images/PremiereRestaurant/img_1.png'
import img_2 from '../images/PremiereRestaurant/img_2.png'
import img_3 from '../images/PremiereRestaurant/img_3.png'
import img_4 from '../images/PremiereRestaurant/img_4.png'
import img_5 from '../images/PremiereRestaurant/img_5.png'
import img_6 from '../images/PremiereRestaurant/img_6.png'
import img_7 from '../images/PremiereRestaurant/img_7.png'
import img_8 from '../images/PremiereRestaurant/img_8.png'
import img_9 from '../images/PremiereRestaurant/img_9.png'
import img_10 from '../images/PremiereRestaurant/img_10.png'

export default function PremiereRestaurant () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageHousing
            title="Дизайн интерьера ресторана 51:4"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Стиль дизайна - "Лофт"</h2>
                <p className="paragraph__text">Наша студия дизайна имеет уже немалый опыт в проектировании помещений общественного питания: кафе, рестораны, лаунж-бары. Представляем Вашему вниманию один из множества таких проектов, выполненных нашей командой в 2015 году.</p>
                <p className="paragraph__text">Ресторан находится в самом сердце столицы в ЖК "Премьера" по пр. Кабанбай Батыра. Интерьер был разработан в 2015 году стиль был выбран в соответствии с направлением заведения, кухней и общей концепцией самим заказчиком. Нам же было предоставлено лишь удовольствие воплотить идею в виде проекта.</p>
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
                <h2 className="paragraph__title">Что важно учитывать при проектировании ресторанов и кафе?</h2>
                <p className="paragraph__text">При разработке проекта интерьера помещения общественного питания необходимо учесть очень много различным факторов. И это далеко не только количество посетителей, пожарная безопасность, санитарные нормы и правила, вентилляция и так далее... Это и прямые и косвенные факторы. Прежде чем приступить к разработке дизайна помещения общепита, хозяин должен определиться с общей концепцией помещения, какой будет кухня, какова целевая аудитория и многое другое. Например, если кухня будет восточной, то будет необходимо учесть оборудование, которое необходимо для данной кухни, а это и тандыр и шашлычная и другое. Обычно мы приступаем к дизайну таких помещений тогда, когда концепция уже готова, Заказчик определился с шеф-поваром и они совместно подобрали себе необходимое оборудование. Наша же задача - не только красиво оформить пространство, но сделать его функциональным: грамотно расставить все на свои места, зонировать все помещения, в том числе и кухню, распределить все инженерные сети для комфортного функционирования пространства. У нас уже немалый опыт в разработке помещений общественного питания, поэтому мы знаем, какие необходимо учесть нюансы при проектировании как кафе, так и баров, ресторанов и столовых.</p>
        </div>
        </>
    )}