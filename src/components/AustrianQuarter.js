import PageHousing from "./PageHousing";
import React, { useEffect } from 'react';
import img_1 from '../images/AustrianQuarter/img_1.png'
import img_2 from '../images/AustrianQuarter/img_2.png'
import img_3 from '../images/AustrianQuarter/img_3.png'
import img_4 from '../images/AustrianQuarter/img_4.png'
import img_5 from '../images/AustrianQuarter/img_5.png'
import img_6 from '../images/AustrianQuarter/img_6.png'
import img_7 from '../images/AustrianQuarter/img_7.png'
import img_8 from '../images/AustrianQuarter/img_8.png'
import img_9 from '../images/AustrianQuarter/img_9.png'
import img_10 from '../images/AustrianQuarter/img_10.png'
import img_11 from '../images/AustrianQuarter/img_11.png'
import img_12 from '../images/AustrianQuarter/img_12.png'
import img_13 from '../images/AustrianQuarter/img_13.png'
import img_14 from '../images/AustrianQuarter/img_14.png'
import img_15 from '../images/AustrianQuarter/img_15.png'
import img_16 from '../images/AustrianQuarter/img_16.png'
import img_17 from '../images/AustrianQuarter/img_17.png'
import img_18 from '../images/AustrianQuarter/img_18.png'
import img_19 from '../images/AustrianQuarter/img_19.png'
import img_20 from '../images/AustrianQuarter/img_20.png'
import img_21 from '../images/AustrianQuarter/img_21.png'
import img_22 from '../images/AustrianQuarter/img_22.png'
import img_23 from '../images/AustrianQuarter/img_23.png'
import img_24 from '../images/AustrianQuarter/img_24.png'


export default function AustrianQuarter () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageHousing
            title="Дизайн интерьера квартиры в ЖК 'Австрийский Квартал'"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Стиль дизайна интерьера - классика</h2>
                <p className="paragraph__text">Дизайн интерьера был выполнен в эклектичном стиле. На разработку проекта ушел 1 месяц , авторский надзор за проектом составлял период в 3 месяца. Основой концепции создания проекта было желание учесть множество таких факторов, как проживание в одной квартире членов семьи в 3 поколениях с самыми разными и противоречивыми пожеланиями. Проект был сдан "под ключ" - с полным подбором всех необходимых материалов, мебели и декора. Площадь проектируемого объекта - 230 кв.м.</p>
                <h2 className="title__smoll">Галерея проекта</h2>
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
                    <li className="image__cell">
                        <img className="image__item" src={img_9} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_10} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_11} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_12} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_13} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_14} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_15} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_16} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_17} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_18} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_19} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_20} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_21} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_22} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_23} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_24} alt="эскиз"/>
                    </li>
                </ul>
                <h2 className="paragraph__title">Как быть, если мне нужен проект в очень сжатые сроки и за маленький бюджет?</h2>
                <p className="paragraph__text">С этой целью Вы можете заказать минимальный пакет услуг, который состоит из чертежей и подбора готовых картинок. В этом проекте не будет учтена проработка всех деталей и разработана визуализация помещений. Однако, если Вам нужен простой стандартный дизайн в современном, или скандинавском стиле или неоклассике, то мы можем разработать такой проект, не прибегая к детальной проработке. Такой проект, как правило, состоит из плана демонтажа перегородок, плана с расстановкой мебелиплана напольных покрытий, плана дверных проемов и открывания дверей, подсчета плитки и напольных покрытий, плана освещения и розеток. Мы так же составим Вам кейс из готовых картинок, которые отражают разные идеи оформления пространства. В среднем, на такой минимальный проект должно уйти не более 1 недели и не делаются дополнительные варианты. Такие проекты чаще всего заказывают люди, которым необходимо сделать ремонт во временном помещении - для сдачи его в аренду или арендуемом самими Заказчиками. Ваше жилое или коммерческое пространство - это Ваше отражение и жить в нем Вам. А поэтому мы рекомендуем заказать более подробный проект дизайна интерьера, если Вы хотите жить в нем сами!</p>
        </div>
        </>
    )}