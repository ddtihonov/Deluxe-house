import PageArticle from './PageArticle';
import React, { useEffect } from 'react';
import img_1 from '../images/Plaster/img_1.png'
import img_2 from '../images/Plaster/img_2.png'
import img_3 from '../images/Plaster/img_3.png'
import img_4 from '../images/Plaster/img_4.png'
import img_5 from '../images/Plaster/img_5.png'
import img_6 from '../images/Plaster/img_6.png'
import img_7 from '../images/Plaster/img_7.png'
import img_8 from '../images/Plaster/img_8.png'
import img_9 from '../images/Plaster/img_9.png'
import img_10 from '../images/Plaster/img_10.png'
import img_11 from '../images/Plaster/img_11.png'
import img_12 from '../images/Plaster/img_12.png'

export default function Plaster () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageArticle
            title="Декоративна штукатурка"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Декоративна штукатурка своими руками</h2>
                <p className="paragraph__text">Декоративная штукатурка — это красивый и необычный способ оформления интерьера, однако ее стоимость довольно высока.</p>
                <p className="paragraph__text">В этой статье мы расскажем Вам, как сделать аналог декора из самых простых и дешевых материалов!</p>
                <p className="paragraph__text">В настоящее время благодаря новым технологиям существует множество способов для оформления стен декоративной штукатуркой. Ярко выраженные или, напротив, еле заметные фактуры, например, с имитацией дерева, ткани или кожи — все это возможно при использовании структурных материалов декоративной штукатурки. Выбор их на сегодняшний день очень широк. Но достаточно большим недостатком является их высокая стоимость.</p>
                <p className="paragraph__text">Разберем, как сделать декоративную штукатурку своими руками из доступных материалов.</p>
                <p className="paragraph__text">Для имитации декоративной штукатурки можно использовать обычную шпаклевку. Она может производиться на основе цемента, акрила, гипса и т.д. Чаще всего выбирают шпатлевку на основе гипса. Но здесь важно только помнить, что гипсовые материалы гигроскопичны, -они впитывают влагу и могут разрушиться, поэтому использовать такой декор в помещениях с большой влажностью нельзя. Ее также необходимо впоследствии покрыть лаком (можно матовым, - его не будет видно, но он хорошо защитит от механических повреждений и от сырости). Помимо разновидностей основного компонента шпаклевочные смеси разделяются на несколько нижеследующих видов:</p>
                <p className="paragraph__text">1) Стартовые. Эти материалы изначально предназначены для выравнивания крупных дефектов обрабатываемой поверхности. Они включают в себя крупнодисперсные добавки, что делает отвердевший материал шероховатым на ощупь.</p>
                <p className="paragraph__text">2) Финишные. Они используются для окончательного выравнивания стен. Наполнитель мелкой дисперсией, поэтому отвердевшее покрытие идеально ровное. Имеют меньшую прочность, чем стартовые, наносятся тонким слоем поверх стартовых, подвержены механическому воздействию после высыхания.</p>
                <p className="paragraph__text">3) Универсальные. Объединяют свойства вышеперечисленных материалов.</p>
                <p className="paragraph__text">Для создания поверхностей с неглубоким рельефом, например, имитирующих венецианку, можно использовать финишную шпатлевку. Слой шпатлевки укладывается слоем не более 3 мм. Затем кельмой или шпателем хаотичными мазками наносится рисунок. Уже после высыхания плоскость сначала зачищается шпателем, потом зашкуривается. Таким образом можно получить рельефное, но в тоже время достаточно гладкое покрытие.</p>
                <p className="paragraph__text">Для создания грубых поверхностей, с более ярко выраженным рельефом подойдут как универсальные, так и стартовые материалы. А разнообразие рельефа, рисунок и фактура достигается за счет способов ее нанесения.</p>
                <p className="paragraph__text">Фактурные поверхности можно получить различными способами нанесения. Структура может быть получена с помощью специальных инструментов и приспособлений. Шпаклевочная смесь накладывается на основание, после чего на ровную поверхность наносится фактурный рисунок. Сделать это можно валиком, шпателем, трафаретом, губкой или любым приспособлением.</p>
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
                </ul>
        </div>
        </>
    )}