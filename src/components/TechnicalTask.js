import React, { useEffect } from 'react';
import CapRepair from './CapRepair';
import img_1 from '../images/TechnicalTask/img_1.jpg'
import img_2 from '../images/TechnicalTask/img_2.jpg'
import img_3 from '../images/TechnicalTask/img_3.jpg'
import img_4 from '../images/TechnicalTask/img_4.jpg'
import img_5 from '../images/TechnicalTask/img_5.jpg'
import img_6 from '../images/TechnicalTask/img_6.jpg'
import img_7 from '../images/TechnicalTask/img_7.jpg'
import img_8 from '../images/TechnicalTask/img_8.jpg'


export default function TechnicalTask () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <CapRepair
            title="ТЕХНИЧЕСКОЕ ЗАДАНИЕ ОТ DH-STUDIO"
            link="/Техническое Задание"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Что включает техническое задание?</h2>
                <p className="paragraph__text">Tехническое задание на проектирование дизайна интерьера - это первый и обязательный документ, который наша студия дизайна прорабатывает с Заказчиками. Он позволяет определить стилистику интерьера, цветовую гамму, предпочитаемую Заказчиками, количество бытовой техники, которую необходимо учесть в проектировании, материалы отделки, текстиль, наполнение встроенной мебели, элементы декора и многое другое.</p>
                <p className="paragraph__text">Предпочтительным будет получить от заказчика примеры понравившихся работ из любых внешних источников, что бы понять его "вкусовые предпочтения". Зачастую возникает необходимость сделать схематичные наброски, предполагаемые клиентом, у нас в офисе.</p>
                <p className="paragraph__text">В Техническом задании прописывается так же и количество помещений, их назначения, и общий портрет того, кто будет в нем проживать/работать/посещать его. В ТЗ прописываются все важные для Заказчика детали и нюансы. В ТЗ дизайнер полностью структурирует всю информацию, которая необходима для последующего проектирования.</p>
                <p className="paragraph__text">ТЗ имеет юридическую силу, и ,если Заказчик на этапе проектирования решает полностью сменить концепцию дизайна, то мы обращаемся к утвержденному ТЗ для описания объемов дополнительных работ. Поэтому очень важно тщательно проработать ТЗ еще до проектирования Эскизного Проекта.</p>
                <p className="paragraph__text">Внимательно ознакомьтесь с представленным примером того, как может выглядеть ТЗ от нашей студии дизайна, если хотите обратиться или уже обратились к нам за услугой по проектированию дизайна.</p>
                <h2 className="title__smoll">ПРИМЕР ТЕХНИЧЕСКОГО ЗАДАНИЯ ОТ DH-STUDIO</h2>
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
                <h2 className="paragraph__title">Для чего нужен Рабочий Проект?</h2>
                <p className="paragraph__text">Чертежи помогут все реализовать!</p>
                <p className="paragraph__text">Рабочий Проект со всеми схемами и чертежами - это инструкция не только для проведения строительных работ, он позволит рассчитать расход и стоимость материалов. Самый ответственный этап. Здесь важна точность, поэтому мы делаем максимально подробную рабочую документацию, состав которой обычно зависит от самого проектируемого объекта, сложности дизайна и сроков. Стандартный Рабочий проект обычно состоит их нижеследующих чертежей:</p>
                <p className="paragraph__text">- План перепланировки;</p>
                <p className="paragraph__text">- План с расстановкой мебели;</p>
                <p className="paragraph__text">- План расстановки выходов электрических;</p>
                <p className="paragraph__text">- План расстановки приборов освещения;</p>
                <p className="paragraph__text">- План привязки приборов освещения к выключателям;</p>
                <p className="paragraph__text">- План теплых полов;</p>
                <p className="paragraph__text">- План привязки сантехнических приборов;</p>
                <p className="paragraph__text">- Карта напольных покрытий;</p>
                <p className="paragraph__text">- Схема встраиваемой мебели;</p>
                <p className="paragraph__text">- Развертка стен;</p>
                <p className="paragraph__text">- Расчет расходуемых материалов чистовой отделки;</p>
                <p className="paragraph__text">- План кондиционирования;</p>
                <p className="paragraph__text">- План потолков;</p>
                <p className="paragraph__text">- Раскладка плитки;</p>
                <p className="paragraph__text">- Список рекомендуемых магазинов с учетом Вашего бюджета;</p>
                <p className="paragraph__text">- Контакты проверенных производителей мебели, элементов и конструкций интерьера</p>
                <p className="paragraph__text">- Другое, зависящее от назначени самого омещения и его наполнения.</p>
        </div>
        </>
    )}