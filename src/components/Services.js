import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Steps from './Steps';
import Portfolio from './Portfolio';
import Rates from './Rates';
import Popup from './Popup.js';

import repiair_we from '../images/repiair/repiair_we.png'

export default function Services (props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <section className="services">
            <div className="main__info">
                <h2 className="main__title">Услуги и цены</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Услуги</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Что представляют собой услуги по дизайну интерьера?</h2>
                <p className="paragraph__text">Спектр наших услуг в рамках любого проекта может быть очень широк. Комплексный Дизайн - Проект включает в себя разработку Эскизного Проекта, Рабочий Проект, ведение авторского надзора, подбор материалов отделки, мебели, фурнитуры, декора и сам процесс декорирования. На цену Дизайн-Проекта влияет несколько факторов: этокомплексность всех услуг и глубина проработки. Например, разработка общественных помещений, которая учитывает профессиональное оборудование и инженерные сети, будет стоить дороже, чем проект квартиры.</p>
                <p className="paragraph__text">Мы разрабатываем необычные, живые и лаконичные интерьеры. Наши работы всегда выгодно отличаются смесью изящества, простоты, стиля и роскоши! В проектировании дизайна мы всегда учитываем возможности своих клиентов, не выходя за рамки Вашего бюджета. Мы создаем те интерьеры, которые потом без ошибок и проволочек можем реализовать в жизнь. Посмотрите примеры наших работ ниже, убедитесь в уникальности наших работ, в их неординарности и элегантности...</p>
        </div>
        <div className="paragraph">
                <h2 className="paragraph__title">Наши цены</h2>
                <p className="paragraph__text">Цена на проект дизайна начинается от 5000 тенге за кв.м. Цена на комплексные услуги с авторским надзором - от 14 000 тенге за кв.м. Авторский надзор подразумевает контроль всех работ, общение с подрядчиками и поставщиками услуг по производству мебели, конструкций и элементов дизайна, внесение корректировок в чертежи после демонтажа или оштукатуривания, подбор материалов отделки и консультация бригады строителей. Разработка дизайн-проекта, которая производится параллельно ремонтным работам, требует определенных навыков, больших усилий и дополнительного времени, а значит и стоит дороже. Именно поэтому все цены мы обсуждаем индивидуально. Что мы выдаем Вам на руки в результате работ:</p>
                <p className="paragraph__text">- Дизайн-проект с комплектом чертежей и эскизами в распечатанном виде для Вас;</p>
                <p className="paragraph__text">- Дизайн-проект с комплектом чертежей в распечатанном виде - для строителей и Вам для закупа материалов;</p>
                <p className="paragraph__text">- Дизайн-Проект в электронной версии;</p>
                <p className="paragraph__text">- Ну, и конечно же, в итоге Вы получите уникальное стильное помещение, которое будет радовать и вдохновлять Вас многие годы!</p>
        </div>
        <Rates
            openPopup={props.handlePopup}
        />
        <Portfolio
            title="Наши проекты"
        />
        <Steps/>
        <section className="payment-procedure">
            <h2 className="payment-procedure__title">Порядок оплаты</h2>
            <div className='payment-procedure__container'>
                <div className='payment-procedure__box'>
                    <p className='payment-procedure__gray'>при заказе проекта без авторского надзора</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>50% </span> от общей суммы - предоплата</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>30% </span> от общей суммы - после утверждения Рабочего Проекта</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>20% </span> от общей суммы - после завершения всех работ</p> 
                </div>
                <div className='payment-procedure__box'>
                    <p className='payment-procedure__gray'>при заказе проекта без авторского надзора</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>40% </span> от общей суммы - предоплата</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>40% </span> от общей суммы - после утверждения Рабочего Проекта</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>20% </span> от общей суммы - после завершения всех работ</p> 
                </div>
            </div>
        </section>
        <section className="we">
            <h2 className="title__smoll">Как мы работаем?</h2>
            <div className="line"></div>
            <div className="we__box">
                <img className="we__image" src={repiair_we} alt="ремонт"/>
                <div className="we__info">
                    <p className="we__text">Студия дизайна DELUXE HOUSE уже более 10 лет выполняет услуги по ремонту и отделочным работам квартир, домов и коммерческих помещений. Мы ремонтируем квартиры, делаем отделку офисов, домов в Астане (Нур-Султане) на высоком профессиональном уровне и не затягиваем оговоренные сроки. Для нас очень важно сдавать в эксплуатацию качественно выполненные объекты, поэтому мы всегда стремимся к совершенству в ходе исполнения своих обязательств. В нашей команде только профессионалы высокого уровня квалификации. Мы делает тщательный отбор своих специалистов, для которых ответственность всегда стоит на первом месте. Перед началом ремонта мы всегда оговариваем сроки по каждому из этапов и предупреждаем о возможных проблемах после тщательного осмотра помещения нашими техническими специалистами.
                        </p>
                    <p className="we__text">Накопив богатый опыт в работе с помещениями самого разного назначения и сложности, нам удалось сформировать очень сильную команду профессионалов самой высокой квалификации по ремонту и отделке.
                    </p>
                    <p className="we__text">Менеджмент ведения всех этапов и бизнесс-процессов был нами хорошо выстроен и отточен. Если Вы цените свое пространство, время, нервы и бюджет, то Вы будете на верном пути, обращаясь в нашу компанию.</p>
                </div>
            </div>
            <div className="button__box">
                <Link className="link-black" to="/repiair">Все о ремонте</Link>
            </div>
        </section>   
        <div className="paragraph">
                <h2 className="paragraph__title">Как заказать услугу по дизайну интерьера в Нур-Султане?</h2>
                <p className="paragraph__text">Интерьеры – это востребованная область в нашем времени. Наша команда поможет вам создать дизайн интерьера, который решит все задачи по организации пространства. Грамотно составленный профессионалами проект подробно и скурпулезно разрабатывается для членов конкретной семьи или компании, с учетом личных привычек каждого, вкусов и индивидуальных особенностей. У любого пространства должен быть свой уникальный климат, который близок хозяевам и всецело дополняет их стиль и образ. Если у Вас есть пространство, а Вы еще не пришли ни к какой идее, или, если она у Вас уже есть, но Вы не знаете или не можете ее воплотить в реальность, то смело обращайтесть в нашу студию дизайна интерьеров за консультацией!</p>
        </div>
        </>
)
}