import React, { useEffect } from 'react';
import CapRepair from './CapRepair';
import img_1 from '../images/WorkingDraft/img_1.png'
import img_2 from '../images/WorkingDraft/img_2.png'
import img_3 from '../images/WorkingDraft/img_3.png'
import img_4 from '../images/WorkingDraft/img_4.png'
import img_5 from '../images/WorkingDraft/img_5.png'
import img_6 from '../images/WorkingDraft/img_6.png'
import img_7 from '../images/WorkingDraft/img_7.png'
import img_8 from '../images/WorkingDraft/img_8.png'


export default function WorkingDraft () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <CapRepair
            title="РАБОЧИЙ ПРОЕКТ ДИЗАЙНА ИНТЕРЬЕРА ОТ DH-STUDIO"
            link="/Рабочий Проект"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Что включает техническое задание?</h2>
                <p className="paragraph__text">Рабочий Проект состоит из чертежей. В него включены все необходимые для реализации проекта схемы, чертежи и расчеты. Это не только планы электрики, сантехники, мебели, освещения, развертки стен и многое другое, но и осмечивание закупаемых материалов чистовой отделки, декора и мебели. Это - один из важнейших и основополагающих этапов в разработке дизайна интерьера. Эта задача порою бывает сложной, если речь идет о многофункциональном пространстве, например, для коммерческих помещений, таких как рестораны, SPA, сауны, гостиницы и прочее, где нужно очень грамотно учесть инженерные сети. Мы имеем многолетний опыт в решении даже очень сложных задач. Профессионалы DELUXE HOUSE точно определят, какие зоны вам бы хотелось сделать просторными, какие спрятать от посторонних, а какие объединить. Мы разрабатываем большое количество вариантов планировочных решений с учетом множества хитростей дизайна. В итоге вы получите идеально спроектированное помещение.</p>
                <h2 className="title__smoll">ПРИМЕР РАБОЧЕГО ПРОЕКТА ДИЗАЙНА ИНТЕРЬЕРА ОТ DH-STUDIO</h2>
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
                <h2 className="paragraph__title">Для чего нужен Рабочий Проект?</h2>
                <p className="paragraph__text">Чертежи помогут все реализовать!</p>
                <p className="paragraph__text">Рабочий Проект со всеми схемами и чертежами - это инструкция не только для проведения строительных работ, он позволит рассчитать расход и стоимость материалов. Самый ответственный этап. Здесь важна точность, поэтому мы делаем максимально подробную рабочую документацию, состав которой обычно зависит от самого проектируемого объекта, сложности дизайна и сроков. Стандартный Рабочий проект обычно состоит их нижеследующих чертежей:</p>
                <p className="paragraph__text">- План перепланировки;</p>
                <p className="paragraph__text">- План с расстановкой мебели;</p>
                <p className="paragraph__text">- План расстановки выходов электрических;</p>
                <p className="paragraph__text">- План расстановки приборов освещения;</p>
                <p className="paragraph__text">- План привязки приборов освещения к выключателям;</p>
                <p className="paragraph__text">- План теплых полов;</p>
                <p className="paragraph__text">- План привязки сантехнических приборов;</p>
                <p className="paragraph__text">- Карта напольных покрытий;</p>
                <p className="paragraph__text">- Схема встраиваемой мебели;</p>
                <p className="paragraph__text">- Развертка стен;</p>
                <p className="paragraph__text">- Расчет расходуемых материалов чистовой отделки;</p>
                <p className="paragraph__text">- План кондиционирования;</p>
                <p className="paragraph__text">- План потолков;</p>
                <p className="paragraph__text">- Раскладка плитки;</p>
                <p className="paragraph__text">- Список рекомендуемых магазинов с учетом Вашего бюджета;</p>
                <p className="paragraph__text">- Контакты проверенных производителей мебели, элементов и конструкций интерьера</p>
                <p className="paragraph__text">- Другое, зависящее от назначени самого омещения и его наполнения.</p>
        </div>
        </>
    )}