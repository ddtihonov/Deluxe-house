import { Link } from "react-router-dom"
import React, { useEffect } from 'react';

import articles_1 from '../images/articles/articles_1.png'
import articles_2 from '../images/articles/articles_2.png'
import articles_3 from '../images/articles/articles_3.png'
import articles_4 from '../images/articles/articles_4.png'
import articles_5 from '../images/articles/articles_5.png'
import articles_6 from '../images/articles/articles_6.png'

export default function Articles () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <section className="articles">
            <div className="main__info">
                    <h2 className="main__title">Статьи О Дизайне Интерьера</h2>
                    <div className="main__box">
                        <Link className="main__link" to="/">Главная</Link>
                        <p className="main__text">/Статьи</p>
                    </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Хотите узнать о дизайне интерьеров?</h2>
                <p className="paragraph__text">Давайте мы поможем разобраться в огромном разнообразии стилей в оформлении интерьеров. Мы расскажем об эклектичных стилях, которые часто граничат между двумя или даже несколькими стилями, порою даже между противоположными!</p>
        </div>
        <div className="articles__elements">
        <h2 className="title__smoll">Интересные статьи</h2>
        <div className="line"></div>    
        <ul className="articles__table">
                <li className="articles__card">
                    <img className="articles__image" src={articles_1} alt="дизайн интерьера"/>
                    <h3 className="articles__title">О сочетании фактур в интерьере</h3>
                    <p className="articles__text">Одним из немаловажных факторов, влияющих на восприятие общей картины дизайна того или иного помещения, является гармоничное сочетание различных фактур. Не стоит путать понятия «фактура»…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/textures">подробнее</Link>
                    </div>
                </li>
                <li className="articles__card">
                    <img className="articles__image" src={articles_2} alt="дизайн интерьера"/>
                    <h3 className="articles__title">Декоративна штукатурка</h3>
                    <p className="articles__text">Декоративная штукатурка — это красивый и необычный способ оформления интерьера, однако ее стоимость довольно высока. В этой статье…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/plaster">подробнее</Link>
                    </div>
                </li>
                <li className="articles__card">
                    <img className="articles__image" src={articles_3} alt="дизайн интерьера"/>
                    <h3 className="articles__title">Что учесть в проекте кухни</h3>
                    <p className="articles__text">Кухня — это самое трудозатратное в квартире помещение. Грамотно спроектированная кухня облегчит работу хозяйки, укоротив время, которое она тратит…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/cocina">подробнее</Link>
                    </div>
                </li>
                <li className="articles__card">
                    <img className="articles__image" src={articles_4} alt="дизайн интерьера"/>
                    <h3 className="articles__title">Как организовать детскую</h3>
                    <p className="articles__text">Детская спальня — это мини-мирок живущего в ней ребенка. Он в ней не просто проводит время, а растет и развивается, — а значит, дел у него обычно очень…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/kids-room">подробнее</Link>
                    </div>
                </li>
                <li className="articles__card">
                    <img className="articles__image" src={articles_5} alt="дизайн интерьера"/>
                    <h3 className="articles__title">Визуально увеличить комнату</h3>
                    <p className="articles__text">Существует множество приемов для визуального увеличения пространства комнаты. С некоторыми из них мы в этой статье поделимся с нашими читателями. И так, в первую очередь нужно обратить внимание…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/large-room">подробнее</Link>
                    </div>
                </li>
                <li className="articles__card">
                    <img className="articles__image" src={articles_6} alt="дизайн интерьера"/>
                    <h3 className="articles__title">Сроки и бюджет</h3>
                    <p className="articles__text">Как быть, если мне нужен проект в очень сжатые сроки и за маленький бюджет? С этой целью Вы можете заказать минимальный пакет услуг, который состоит из чертежей и подбора…</p>
                    <div className="articles__box">
                        <div className="articles__line"></div>
                        <Link className="articles__link" to="/budget">подробнее</Link>
                    </div>
                </li>
            </ul>
        </div>
        
            <div className="button__box">
                <Link className="link-black" to="/articles">Предыдущая страница</Link>
                <Link className="link-black link-black__margin" to="/articles">Следующая страница</Link>
            </div>
        </>
)
}