import { Link } from "react-router-dom"
import CardArticle from "./CardArticle"
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
                <CardArticle
                    title="О сочетании фактур в интерьере"
                    text="Одним из немаловажных факторов, влияющих на восприятие общей картины дизайна того или иного помещения, является гармоничное сочетание различных фактур. Не стоит путать понятия «фактура»…"
                    image={articles_1}
                />
                <CardArticle
                    title="Декоративная штукатурка"
                    text="Декоративная штукатурка — это красивый и необычный способ оформления интерьера, однако ее стоимость довольно высока. В этой статье…"
                    image={articles_2}
                />
                <CardArticle
                    title="Что учесть в проекте кухни?"
                    text="Кухня — это самое трудозатратное в квартире помещение. Грамотно спроектированная кухня облегчит работу хозяйки, укоротив время, которое она тратит…"
                    image={articles_3}
                />
                <CardArticle
                    title="Как организовать детскую?"
                    text="Детская спальня — это мини-мирок живущего в ней ребенка. Он в ней не просто проводит время, а растет и развивается, — а значит, дел у него обычно очень…"
                    image={articles_4}
                />
                <CardArticle
                    title="Визуально увеличить комнату"
                    text="Существует множество приемов для визуального увеличения пространства комнаты. С некоторыми из них мы в этой статье поделимся с нашими читателями. И так, в первую очередь нужно обратить внимание…"
                    image={articles_5}
                />
                <CardArticle
                    title="Минимализм и простота кухни"
                    text="Кухня всегда остается одной из самых часто посещаемых комнат вашего дома и эдаким «коммуникативным центром» всей семьи. Мы готовы поделиться основными простыми советами как привнести…"
                    image={articles_6}
                />
            </ul>
        </div>
        
            <div className="button__box">
                <Link className="link-black" to="/articles">Предыдущая страница</Link>
                <Link className="link-black link-black__margin" to="/articles">Следующая страница</Link>
            </div>
        </>
)
}