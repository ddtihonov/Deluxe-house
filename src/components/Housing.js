import { Link } from 'react-router-dom';

import design_1 from '../images/portfolio/design_1.png'
import design_2 from '../images/portfolio/design_2.png'
import design_3 from '../images/portfolio/design_3.png'
import design_4 from '../images/portfolio/design_4.png'
import design_5 from '../images/portfolio/design_5.png'
import design_6 from '../images/portfolio/design_6.png'
import design_7 from '../images/portfolio/design_7.png'
import design_8 from '../images/portfolio/design_8.png'
import design_9 from '../images/portfolio/design_9.png'
import design_13 from '../images/portfolio/design_13.png'
import design_14 from '../images/portfolio/design_14.png'
import design_12 from '../images/portfolio/design_12.png'

export default function Housing () {

    return (
        <>
        <section className="beginning">
        <div className="main__info">
                <h2 className="main__title">Дизайн интерьера квартир и домов</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Жилые помещения</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Что мы можем предложить?</h2>
                <p className="paragraph__text">Дизайн-студия DELUXE HOUSE предлагает услуги по созданию уникального интерьера Вашей квартиры, дома или коттеджа. Мы предоставляем услуги профессиональных дизайнеров для реализации проектов любой сложности и работаем со всеми направлениями в области дизайна интерьера.</p>
                <p className="paragraph__text">Обратившись к нам, Вы точно получите незабываемое удовольствие, продумывая все детали
и планируя собственную квартиру или дом.</p>
                <p className="paragraph__text">Под руководством профессионалов , имеющих большой опыт в создании интерьеров жилых и общественных помещений Вы можете быть уверены, что результат Вас порадует.</p>
        </div>
        <section className="portfolio">
            <h2 className="paragraph__title">Наши работы по дизайну интерьера квартир и домов</h2>
            <div className="line"></div>
            <ul className="table">
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_1} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Стильная кухня</h3>
                    <p className="table__text">Квартира 220 кв.м. в ЖК “Сentral Park”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_2} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Светлая и элегантная спальня</h3>
                    <p className="table__text">Квартира 210 кв.м. в ЖК “Ray Residence”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_3} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Атмосфера роскоши и уюта</h3>
                    <p className="table__text">Квартира 210 кв.м. в ЖК “Ray Residence”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_4} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Дом для двух поколений</h3>
                    <p className="table__text">Дом в мкр. “Дипломатический городок”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_5} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Комфортная комната отдыха</h3>
                    <p className="table__text">Гостевой дом 3000 кв.м. “Heaven Astana”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_6} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Спальня для юной леди</h3>
                    <p className="table__text">Квартира 320 кв.м. в ЖК “Арман”</p>
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
                    <h3 className="table__title">Просторная и стильная кухня</h3>
                    <p className="table__text">Квартира 215 кв.м. в ЖК “Австрийский Квартал”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_9} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Яркий интерьер гостиной</h3>
                    <p className="table__text">Квартира 320 кв.м. в ЖК “Арман”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_13} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Стиль — неоклассика. 2020 г.</h3>
                    <p className="table__text">Коттедж 450 кв.м. в мкр. Family Village</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_14} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Стиль — лофт. 2020 г.</h3>
                    <p className="table__text">Квартира 150 кв.м. в ЖК “Dream City”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_12} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Изысканная и просторная гостиная</h3>
                    <p className="table__text">Квартира 215 кв.м. в ЖК “Австрийский Квартал”</p>
                </li>
            </ul>
            <div className="button__box">
                <Link className="link-black" to="/commercial">Коммерческие помещения</Link>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Как заказать услугу по дизайну интерьера в Нур-Султане?</h2>
                <p className="paragraph__text">Интерьеры – это востребованная область в нашем времени. Наша команда поможет вам создать дизайн интерьера, который решит все задачи по организации пространства. Грамотно составленный профессионалами проект подробно и скурпулезно разрабатывается для членов конкретной семьи или компании, с учетом личных привычек каждого, вкусов и индивидуальных особенностей. У любого пространства должен быть свой уникальный климат, который близок хозяевам и всецело дополняет их стиль и образ. Если у Вас есть пространство, а Вы еще не пришли ни к какой идее, или, если она у Вас уже есть, но Вы не знаете или не можете ее воплотить в реальность, то смело обращайтесть в нашу студию дизайна интерьеров за консультацией!</p>
        </div>
        </>
)
}