import { Link } from "react-router-dom"

export default function Contacts () {

    return (
        <>
        <section className="commercial">
        <div className="main__info">
                <h2 className="main__title">Как нас найти</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Контакты</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Для партнеров</h2>
                <p className="paragraph__text">Принимаем заявки на сотрудничество с мебельными салонами, магазинами и цехами, с салонами отделочных материалов, приборов освещения, и любых других предметов интерьера. Для связи с менеджером, пишите на WhatsApp +7 000 0000 000</p>
                <h2 className="paragraph__title">Контакты Дизайна Интерьера В Астане DH-STUDIO</h2>
        </div>
        </>
)
}