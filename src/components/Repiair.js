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

export default function Repiair () {

    return (
        <>
        <section className="repiair">
        <div className="main__info">
                <h2 className="main__title">Ремонт квартир любой сложности</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Ремонт</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Что мы можем предложить?</h2>
                <p className="paragraph__text">Наш богатый опыт ведения контроля за отделочными работами позволил нам наладить менеджмент на высоком уровне профессионализма.</p>
                <p className="paragraph__text">С нами ремонт и отделка квартир и общественных помещений станут приятным событием. Производить все работы по ремонту и отделке будет большая высоко квалифицированная бригада мастеров со стажем ремонтно-отделочных работ более 10 лет.</p>
        </div>
        <section className="portfolio">
            <h2 className="paragraph__title">Более 200 успешных проектов</h2>
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
                <Link className="link-black" to="/housing">Жилые помещения</Link>
                <Link className="link-black link-black__margin" to="/commercial">Коммерческие помещения</Link>
            </div>
        </section>
        </>
)
}