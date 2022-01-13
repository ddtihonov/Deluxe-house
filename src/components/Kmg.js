import PageCommercial from './PageCommercial';
import React, { useEffect } from 'react';
import img_1 from '../images/Kmg/img_1.png'
import img_2 from '../images/Kmg/img_2.png'
import img_3 from '../images/Kmg/img_3.png'
import img_4 from '../images/Kmg/img_4.png'
import img_5 from '../images/Kmg/img_5.png'
import img_6 from '../images/Kmg/img_6.png'
import img_7 from '../images/Kmg/img_7.png'
import img_8 from '../images/Kmg/img_8.png'
import img_9 from '../images/Kmg/img_9.png'
import img_10 from '../images/Kmg/img_10.png'
import img_11 from '../images/Kmg/img_11.png'
import img_12 from '../images/Kmg/img_12.png'

export default function Kmg () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageCommercial
            title="Дизайн офиса с конференц-залом"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Проект офиса был выполнен в современном стиле.</h2>
                <p className="paragraph__text">Проект дизайна интерьера для данного помещения был выполнен с учетом всех пожеланий Заказчика. Главной задачей перед дизайнерами стояло объединение нескольких небольших кабинетов, снос имеющегося санузла и некоторых инженерных сетей, при этом избегая внести разрушительные для конструктивных элементов самого здания изменения. Шахта вентиляции и канализационный стояк был скрыт в декоративном элементе стены.</p>
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
                </ul>
                <h2 className="paragraph__title">Освещение для офисов. Что важно знать?</h2>
                <p className="paragraph__text">Рабочее время занимает очень важную часть жизненного времени человека. По сути, мы живем в основном на работе. А потому самым важным в проектировании офисного дизайна является освещение. От него зависит не только зрение, но и психоэмоциональное состояние, а значит и умственная активность, а это и есть продуктивность нашей работы. Самым важным критерием в разработке проекта дизайна для офисного пространства является естественное дневное освещение. Если помещение очень больше с одним панорамным окном, а нужно разбить его на множество более мелких кабинетов, то очень важно не заслонить доступ к кабинетам солнечного света. Лучшим решением будет соорудить стеклянные перегородки с регулируемой количество пропускаемого света завесой. В их качестве могут служить стильные жалюзи, или, к примеру, это может быть матирование стекла перегородок. Конечно же, крайне немаловажно помнить, что уровень освещенности - не единственный важный критерий, который стоит учесть при проектировании дизайна офиса. Есть также и вентилирование, пожарная безопасность. Но зачастую они учтены еще при постройке здания и проектировании его плана. Задачей дизайнера будет учесть все имеющиеся данные и создать максимально комфортные условия для своих клиентов!</p>
        </div>
        </>
    )}