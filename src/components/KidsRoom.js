import PageArticle from './PageArticle';
import React, { useEffect } from 'react';
import img_1 from '../images/KidsRoom/img_1.png'
import img_2 from '../images/KidsRoom/img_2.png'
import img_3 from '../images/KidsRoom/img_3.png'
import img_4 from '../images/KidsRoom/img_4.png'
import img_5 from '../images/KidsRoom/img_5.png'
import img_6 from '../images/KidsRoom/img_6.png'
import img_7 from '../images/KidsRoom/img_7.png'
import img_8 from '../images/KidsRoom/img_8.png'


export default function KidsRoom () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageArticle
            title="Детская комната"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Как организовать детскую комнату?</h2>
                <p className="paragraph__text">Детская спальня - это мини-мирок живущего в ней ребенка. Он в ней не просто проводит время, а растет и развивается, - а значит, дел у него обычно очень много. Детская является многофункциональным помещением, ведь эта комната одновременно выполняет не только функции спальни, но и игровой комнаты, спортзала, а так же места для учебы.</p>
                <p className="paragraph__text">Детская комната – это очень важное помещение в доме, в ней дети развлекаются, познают мир, переодеваются, занимаются своими личными делами и, конечно, спят и отдыхают.</p>
                <p className="paragraph__text">Важно помнить некоторые правила оформления детской, а при оформлении детской нужно учесть несколько факторов:</p>
                <p className="paragraph__text">- возраст ребенка/детей;</p>
                <p className="paragraph__text">- количество детей;</p>
                <p className="paragraph__text">- пол ребенка/детей;</p>
                <p className="paragraph__text">- правильное использование цветов и оттенков;</p>
                <p className="paragraph__text">- личные пожелания ребенка в оформлении;</p>
                <p className="paragraph__text">- рост и взросление ребенка (интерьер нужно оформлять с учетом того, что он достаточно быстро может "вырасти" из нынешнего своего вкусового предпочтения в оформлении);</p>
                <p className="paragraph__text">- наличие всевозможных ящиков, тумбочек, коробок и полок для хранения вещей;</p>
                <p className="paragraph__text">- хобби ребенка (спорт, музыка и другое);</p>
                <p className="paragraph__text">- удачная расстановка мебели и аксессуаров.</p>
                <p className="paragraph__text">Одну из самых больших ролей в дизайне интерьера детской комнаты играет освещение! </p>
                <p className="paragraph__text">Приборами освещения для детской может быть точечный свет, люстра, подсветка светодиодной лентой, всевозможные бра и настольные лампы. Очень важно для детской предусмотреть разные сценарии освещения: для игр, для сна и для учебы.</p>
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
                </ul>
        </div>
        </>
    )}