import PageArticle from './PageArticle';
import React, { useEffect } from 'react';
import img_1 from '../images/Budget/img_1.png'
import img_2 from '../images/Budget/img_2.png'
import img_3 from '../images/Budget/img_3.png'
import img_4 from '../images/Budget/img_4.png'

export default function Budget () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageArticle
            title="Сроки и бюджет"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Как быть, если мне нужен проект в очень сжатые сроки и за маленький бюджет?</h2>
                <p className="paragraph__text">С этой целью Вы можете заказать минимальный пакет услуг, который состоит из чертежей и подбора готовых картинок.</p>
                <p className="paragraph__text">В этом проекте не будет учтена проработка всех деталей и разработана визуализация помещений. Однако, если Вам нужен простой стандартный дизайн в современном, или скандинавском стиле или неоклассике, то мы можем разработать такой проект, не прибегая к детальной проработке.</p>
                <p className="paragraph__text">Такой проект, как правило, состоит из плана демонтажа перегородок, плана с расстановкой мебели, плана напольных покрытий, плана дверных проемов и открывания дверей, подсчета плитки и напольных покрытий, плана освещения и розеток. Мы так же составим Вам кейс из готовых картинок, которые отражают разные идеи оформления пространства. В среднем, на такой минимальный проект должно уйти не более 1 недели и не делаются дополнительные варианты.</p>
                <p className="paragraph__text">Такие проекты чаще всего заказывают люди, которым необходимо сделать ремонт во временном помещении - для сдачи его в аренду или арендуемом самими Заказчиками.</p>
                <p className="paragraph__text">Ваше жилое или коммерческое пространство - это Ваше отражение и жить в нем Вам. А поэтому мы рекомендуем заказать более подробный проект дизайна интерьера, если Вы хотите жить в нем сами!</p>
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
                </ul>
        </div>
        </>
    )}