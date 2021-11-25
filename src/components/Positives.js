import positives_1 from '../images/positives/positives_1.png'
import positives_2 from '../images/positives/positives_2.png'
import positives_3 from '../images/positives/positives_3.png'
import positives_4 from '../images/positives/positives_4.png'
import plus from '../images/positives/as-plus.png'
import positives_2_1 from '../images/positives/positives_2.1.png'
import positives_3_2 from '../images/positives/positives_3.2.png'
import positives_3_1 from '../images/positives/positives_3.1.png'

export default function Positives () {

    return (
        <section className="positives">
            <img className="label__as-plus" src={plus} alt="надпись"/>
            <div className="positives__content">
                <article className="positives__container">
                    <img className="positives__image" src={positives_1} alt="дизайн интерьера"/>
                    <div className="positives__box">
                        <p className="positives__text">МЫСЛИМ КРЕАТИВНО</p>
                        <h2 className="positives__title">Экслюзивный дизайн</h2>
                        <p className="text">Каждый проект дизайна интерьера разрабатывается нами индивидуально для каждого заказчика. Мы не повторяем свои проекты и стараемся каждый проект делать непохожими на другие.
                            При разработке дизайна мы учитываем все пожелания своих клиентов и всегда рады предложить свежие идеи.</p>
                    </div>
                </article>
                <article className="positives__container positives__container_right">
                    <img className="positives__draft_one" src={positives_2_1} alt="чертеж"/>
                    <div className="positives__box">
                        <p className="positives__text positives__text-right">НАЛАЖЕННЫЙ СЕРВИС</p>
                        <h2 className="positives__title positives__text-right">Профессиональный подход</h2>
                        <p className="text positives__text-right">В нашей команде работают дипломированные специалисты с большим опытом. Нами было реализовано большое количество объектов, поэтому для нас основной ценностью является ответственный подход к своей работе.
                            Мы тщательно следим за тенденциями на рынке и всегда в курсе всех новинок.
                            Своих партнеров и подрядчиков мы всегда выбираем, исходя из их опыта и качества предоставляемых ими услуг.</p>
                    </div>
                    <img className="positives__image" src={positives_2} alt="дизайн интерьера"/>
                </article>
                <article className="positives__container">
                    <img className="positives__draft_ragth" src={positives_3_2} alt="чертеж"/>
                    <img className="positives__image" src={positives_3} alt="дизайн интерьера"/>
                    <div className="positives__box">
                        <p className="positives__text">ОТТОЧЕННОЕ МАСТЕРСТВО</p>
                        <h2 className="positives__title">Внимательное исполнение</h2>
                        <p className="text">Команда опытных профессионалов хорошо знает, как провести авторский надзор, тщательно отслеживая каждый этап, м подобрать все необходимые материалы для того, что бы реализация объекта соответствовала проекту.
                            А отличное знание рынка отделочных материалов, оборудования, мебели и декора помогут Вам сэкономить время, нервы, и пожалуй самое главное - Ваш бюджет!</p>
                    </div>
                </article>
                <article className="positives__container positives__container_right">
                    <img className="positives__draft_left" src={positives_3_1} alt="чертеж"/> 
                    <div className="positives__box">
                        <p className="positives__text positives__text-right">ВЫСОКИЙ ПРОФЕССИОНАЛИЗМ</p>
                        <h2 className="positives__title positives__text-right">Точный расчет</h2>
                        <p className="text positives__text-right">В нашей команде работают дипломированные специалисты с большим опытом. Нами было реализовано большое количество объектов, поэтому для нас основной ценностью является ответственный подход к своей работе.
                            Мы тщательно следим за тенденциями на рынке и всегда в курсе всех новинок.
                            Своих партнеров и подрядчиков мы всегда выбираем, исходя из их опыта и качества предоставляемых ими услуг.</p>
                    </div>
                    <img className="positives__image" src={positives_4} alt="дизайн интерьера"/>
                </article>
            </div>
        </section>
)
}