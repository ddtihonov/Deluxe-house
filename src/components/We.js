import { Link } from 'react-router-dom';
import we_image from '../images/we/we_image.png'
import title from '../images/we/title.svg'
import about_2 from '../images/we/about_2.svg'

export default function We () {

    return (
        <section className="we">
            <h2 className="title__smoll">Лучшие решения, актуальный дизайн, непревзойденное качество — <span className="title__color">все это о нашей студии</span></h2>
            <div className="line"></div>
            <div className="we__box">
                <img className="we__image" src={we_image} alt="ремонт"/>
                <div className="we__info">
                    <p className="we__text">С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач.
                        Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное усмотрение. 
                        </p>
                    <p className="we__text">Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.
                    </p>
                    <p className="we__text">Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи, познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем помещении утонченную роскошь!</p>
                    <div className="result">
                        <div className="result__values">
                            <div className="result__box">
                                <p className="result__rotation">Более</p>
                                <p className="result__number">10</p>
                                <p className="result__text">лет
                                    на рынке</p>
                            </div>
                            <div className="result__box">
                                <p className="result__rotation">Более</p>
                                <p className="result__number">200</p>
                                <p className="result__text">успешных
                                    проектов</p>
                            </div>
                            <div className="result__box">
                                <p className="result__rotation">Более</p>
                                <p className="result__number">30000</p>
                                <p className="result__text">КВ.М. ПЛОЩАДИ РЕАЛИЗОВАНО</p>
                            </div>
                        </div>
                        <div className="result__container">
                            <img className="result__quote" src={title} alt="цытата"/>
                            <img className="result__caption" src={about_2} alt="подпись"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button__box">
                <Link className="link-black" to="/services">Услуги и цены</Link>
            </div>
    </section>   
)
}