import { Link } from 'react-router-dom';
import Steps from './Steps';


import design_1 from '../images/commercial/design_1.png'
import design_2 from '../images/commercial/design_2.png'
import design_3 from '../images/commercial/design_3.png'
import design_4 from '../images/commercial/design_4.png'
import design_5 from '../images/commercial/design_5.png'
import design_6 from '../images/commercial/design_6.png'
import design_7 from '../images/portfolio/design_7.png'
import design_8 from '../images/commercial/design_8.png'
import design_9 from '../images/commercial/design_9.png'
import design_10 from '../images/portfolio/design_10.png'
import design_11 from '../images/portfolio/design_11.png'
import design_5_1 from '../images/portfolio/design_5.png'
import repiair_we from '../images/repiair/repiair_we.png'

export default function Services () {

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
        <section className="we">
            <h2 className="title__smoll">Лучшие решения, актуальный дизайн, непревзойденное качество — <span className="title__color">все это о нашей студии</span></h2>
            <div className="line"></div>
            <div className="we__box">
                <img className="we__image" src={repiair_we} alt="ремонт"/>
                <div className="we__info">
                    <p className="we__text">Студия дизайна DELUXE HOUSE уже более 10 лет выполняет услуги по ремонту и отделочным работам квартир, домов и коммерческих помещений. Мы ремонтируем квартиры, делаем отделку офисов, домов в Астане (Нур-Султане) на высоком профессиональном уровне и не затягиваем оговоренные сроки. В нашей команде только профессионалы высокого уровня квалификации.
                        </p>
                    <p className="we__text">Накопив богатый опыт в работе с помещениями самого разного назначения и сложности, нам удалось сформировать очень сильную команду профессионалов самой высокой квалификации.
                    </p>
                    <p className="we__text">Менеджмент ведения всех этапов и бизнесс-процессов был нами хорошо выстроен и отточен. Если Вы цените свое пространство, время, нервы и бюджет, то Вы будете на верном пути, обращаясь в нашу компанию.</p>
                </div>
            </div>
        </section>   
        <section className="portfolio">
            <h2 className="paragraph__title">Примеры проектов</h2>
            <div className="line"></div>
            <ul className="table">
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_1} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Помещение для игры в гольф</h3>
                    <p className="table__text">Симулятор для игры в гольф в БЦ «Арман»</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_2} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Помещение паба в Гольф-Клубе “Астана”</h3>
                    <p className="table__text">VIP-здание Гольф-клуба, 2021 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_3} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Интерьер офиса компании KMG</h3>
                    <p className="table__text">Бизнес-Центр на Водно-зеленом бульваре</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_4} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Бутик женской одежды</h3>
                    <p className="table__text">ТРЦ “Евразия, 2019 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_5} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">SPA с банным комплексом</h3>
                    <p className="table__text">ул. Аксу-Аюлы, 2020 год.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_6} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Торговый Зал K-Cell Центра</h3>
                    <p className="table__text">ТРЦ “Абу-Даби Плаза”, 2020 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_7} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Бассейн в гостевом доме</h3>
                    <p className="table__text">Гостевой дом с сауной</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_8} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Терраса ресторана Trattoria Highvill</h3>
                    <p className="table__text">ул. А.Байтурсынова, 2021 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_9} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Офис руководителя компании “Таймас”</h3>
                    <p className="table__text">Дизайн офиса в БЦ «Азия»</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_10} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Стильный бутик</h3>
                    <p className="table__text">Бутик женской одежды в ТРЦ “Азия Парк”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_11} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Дизайн ресторана 51:4</h3>
                    <p className="table__text">Ресторан в ЖК “Премьера”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_5_1} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Комфортная комната отдыха</h3>
                    <p className="table__text">Гостевой дом 3000 кв.м. “Heaven Astana”</p>
                </li>
            </ul>
            <div className="button__box">
                <Link className="link-black" to="/housing">Жилые помещения</Link>
                <Link className="link-black link-black__margin" to="/commercial">Коммерческие помещения</Link>
            </div>
        </section>
        <Steps/>
        <div className="paragraph">
                <h2 className="paragraph__title">Как заказать услугу по дизайну интерьера в Нур-Султане?</h2>
                <p className="paragraph__text">Интерьеры – это востребованная область в нашем времени. Наша команда поможет вам создать дизайн интерьера, который решит все задачи по организации пространства. Грамотно составленный профессионалами проект подробно и скурпулезно разрабатывается для членов конкретной семьи или компании, с учетом личных привычек каждого, вкусов и индивидуальных особенностей. У любого пространства должен быть свой уникальный климат, который близок хозяевам и всецело дополняет их стиль и образ. Если у Вас есть пространство, а Вы еще не пришли ни к какой идее, или, если она у Вас уже есть, но Вы не знаете или не можете ее воплотить в реальность, то смело обращайтесть в нашу студию дизайна интерьеров за консультацией!</p>
        </div>
        </>
)
}