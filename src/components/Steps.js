import steps_1 from '../images/steps/steps_1.png'
import steps_2 from '../images/steps/steps_2.png'
import steps_3 from '../images/steps/steps_3.png'
import steps_4 from '../images/steps/steps_4.png'
import steps_5 from '../images/steps/steps_5.png'
import steps_6 from '../images/steps/steps_6.png'

export default function Steps () {

    return (
        <section className="steps">
        <ul className="steps__table" >
            <li className="steps__cell">
                <img className="steps__image" src={steps_1} alt="иконка"/>
                <h3 className="steps__subtitle">ТЕХНИЧЕСКОЕ ЗАДАНИЕ</h3>
                <p className="steps__text">Замеры помещений. Составление Технического Задания на проектирование. Заключение Договора на оказание услуг. Грамотно составленные документы помогут избежать многих недопониманий на всех этапах работ.</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li>
            <li className="steps__cell">
                <img className="steps__image" src={steps_2} alt="иконка"/>
                <h3 className="steps__subtitle">3D-ВИЗУАЛИЗАЦИЯ</h3>
                <p className="steps__text">Или - Эскизный Проект. 3Д-визуализация разрабатывается на основе утвержденного плана с расстановкой мебели и Технического Задания на проектирование. Она помогает нам понять, какой мы хотим ремонт и комплектацию.</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li>
            <li className="steps__cell">
                <img className="steps__image" src={steps_3} alt="иконка"/>
                <h3 className="steps__subtitle">ЧЕРТЕЖИ</h3>
                <p className="steps__text">Рабочий Проект со всеми схемами и чертежами - это инструкция не только для проведения строительных работ, он позволит рассчитать расход и стоимость материалов. Самый ответственный этап. Здесь важна точность.</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li>
            <li className="steps__cell">
                <img className="steps__image" src={steps_4} alt="иконка"/>
                <h3 className="steps__subtitle">АВТОРСКИЙ НАДЗОР</h3>
                <p className="steps__text">Авторский надзор - это координирование строительных работ для соответствия Проекту. Услуга авторского надзора позволяет избежать множество ошибок, а также интерактивно решить возникшие неполадки, которые могут быть обнаружены при ремонте</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li>
            <li className="steps__cell">
                <img className="steps__image" src={steps_5} alt="иконка"/>
                <h3 className="steps__subtitle">ПОДБОР МАТЕРИАЛОВ</h3>
                <p className="steps__text">Мы поможем выбрать материалы чистовой отделки, мебели и декора. Мы отлично знаем рынок, что позволит Вам сэкономить бюджет, при этом не теряя, и даже выигрывая в качестве! Мы предложим Вам альтернативные материалы, соответствующие Проекту и Вашему бюджету</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li>
            <li className="steps__cell">
                <img className="steps__image" src={steps_6} alt="иконка"/>
                <h3 className="steps__subtitle">КОМПЛЕКТАЦИЯ</h3>
                <p className="steps__text">Дизайнеры нашей студии составят график снабжения материалами, встретят все материалы на объекте и проследят за тем, что бы все материалы, мебель или другие элементы интерьера были установлены на объекте в строгом соответствии с проектом!</p>
                <a className="steps__link" href="#">ПОДРОБНЕЕ...</a>
            </li> 
        </ul>
    </section>
)
}