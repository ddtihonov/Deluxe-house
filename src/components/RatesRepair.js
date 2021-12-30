import rates_2 from '../images/rates/rates_2.png'
import rates_1 from '../images/rates/rates_1.png'

export default function RatesRepair () {

    return (
    <section className="rates">
        <img className="label__rates" src={rates_2} alt="надпись"/>
        <img className="label__right" src={rates_1} alt="надпись"/>
        <h2 className="title__smoll">Линейка тарифов</h2>
        <div className="line"></div>
        <ul className="table-smoll">
            <li className="rates__card">
                <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“LIGHT”</h3>
                </div>
                <h4 className="rates__title">20 000 тг/кв.м.</h4>
                <p className="rates__subtitle">Пакет услуг включает:</p>
                <p className="rates__item">- Вырванивание поверхностей потолков и стен;</p>
                <p className="rates__item">- Заливка пола "Экопол";</p>
                <p className="rates__item">- Покраска стен и потолка;</p>
                <p className="rates__item">- Укладка кафеля/керамогранита;</p>
                <p className="rates__item">- Монтаж лепнины потолочной;</p>
                <p className="rates__item">- Укладка ламината;</p>
                <p className="rates__item">- Поклейка обоев;</p>
                <p className="rates__item">- Установка и монтаж сантехнического оборудования;</p>
                <p className="rates__item">- Установка дверей;</p>
                <p className="rates__item">- Установка и монтаж розеток и выключателей;</p>
                <p className="rates__item">- Установка и монтаж приборов освещения;</p>
                <p className="rates__item">- Вывоз мусора;</p>
                <p className="rates__item">- Расчет расходуемых материалов;</p>
                <p className="rates__item">- Закуп/прием материалов;</p>
                <p className="rates__item">- Уборка помещения.</p>
                <button className="rates__button">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“STANDART”</h3>
                </div>
                <h4 className="rates__title">25 000 тг/кв.м.</h4>
                <p className="rates__subtitle">Дополнительно к пакету услуг&emsp; “LIGHT”:</p>
                <p className="rates__item">- Монтаж/демонтаж электрической проводки;</p>
                <p className="rates__item">- Монтаж/демонтаж дверных проемов;</p>
                <p className="rates__item">- Монтаж гипсокартоновых конструкций;</p>
                <p className="rates__item">- Монтаж молдингов и других элементов настенного лепного декора;</p>
                <p className="rates__item">- Монтаж и установка конструктивных элементов интерьера (МДФ-панели, гипсовые панели и другое);</p>
                <p className="rates__item">- Монтаж и установка всех видов освещения (трековые светильники, софиты, светодиодная подсветка и другое);</p>
                <p className="rates__item">- Поклейка фотообоев;</p>
                <p className="rates__item">-Установка и монтаж мелких деталей (ключки, зеркала, ограничители открывания дверей и т.д.).</p>
                <button className="rates__button">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“BUSINESS”</h3>
                </div>
                <h4 className="rates__title">30 000 тг/кв.м.</h4>
                <p className="rates__subtitle">Дополнительно к пакету услуг “STANDART”:</p>
                <p className="rates__item">- Монтаж/демонтаж перегородок;</p>
                <p className="rates__item">- Заливка пола бетонной стяжкой;</p>
                <p className="rates__item">- Выравнивание поверхностей стен песчанной штукатуркой "под маяк";</p>
                <p className="rates__item">- Монтаж всех видов настенного декора;</p>
                <p className="rates__item">- Монтаж и установка металлических конструкций (лестницы, сцены, дополнительный этаж и другое);</p>
                <p className="rates__item">- Монтаж и установка элементов интерьера из натурального/искусственного камня, МДФ, гипса, пластика и дерева;</p>
                <p className="rates__item">- Клининг.</p>
                <button className="rates__button">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
            <li className="rates__card">
            <div className="rates__header">
                    <p className="rates__header_text">Пакет</p>
                    <h3 className="rates__header_title">“VIP”</h3>
                </div>
                <h4 className="rates__title">45 000 тг/кв.м.</h4>
                <p className="rates__subtitle">Дополнительно к пакету услуг “BUSINESS”:</p>
                <p className="rates__item">- Разработка Эскизного Проекта дизайна интерьера с 3д-визуализацией;</p>
                <p className="rates__item">- Разработка Рабочего Проекта, подразумевающего все чертежи и схемы;</p>
                <p className="rates__item">- Авторский надзор дизайнера на объекте и при производстве мебели и других элементов интерьера;</p>
                <p className="rates__item">- Подбор всех материалов, мебели, элементов декора;</p>
                <p className="rates__item">- Надзор за исполнением сторонних исполнителей (производство мебели и другое);</p>
                <p className="rates__item">- Технический инженерный надзор.</p>
                <button className="rates__button">ЗАКАЗАТЬ УСЛУГУ</button>
            </li>
        </ul>
    </section>   
)
}