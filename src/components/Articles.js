import { Link } from "react-router-dom"

export default function Articles () {

    return (
        <>
        <section className="articles">
        <div className="main__info">
                <h2 className="main__title">Статьи О Дизайне Интерьера</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Статьи</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Хотите узнать о дизайне интерьеров?</h2>
                <p className="paragraph__text">Давайте мы поможем разобраться в огромном разнообразии стилей в оформлении интерьеров. Мы расскажем об эклектичных стилях, которые часто граничат между двумя или даже несколькими стилями, порою даже между противоположными!</p>
        </div>
        </>
)
}