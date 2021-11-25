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
import design_10 from '../images/portfolio/design_10.png'
import design_11 from '../images/portfolio/design_11.png'
import design_12 from '../images/portfolio/design_12.png'

export default function Portfolio () {

    return (
        <section className="portfolio">
            <h2 className="title__smoll">Наши проекты</h2>
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
                        <img className="table__image" src={design_12} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Изысканная и просторная гостиная</h3>
                    <p className="table__text">Квартира 215 кв.м. в ЖК “Австрийский Квартал”</p>
                </li>
            </ul>
            <div className="button__box">
                <Link className="link-black" to="/housing">Жилые помещения</Link>
                <Link className="link-black link-black__margin" to="/commercial">Коммерческие помещения</Link>
            </div>
        </section>
)
}