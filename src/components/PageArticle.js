import { Link } from "react-router-dom"


export default function PageArticle (props) {

    return (
        <>
        <section className="articles">
            <div className="main__info">
                    <h2 className="main__title">{props.title}</h2>
                    <div className="main__box">
                        <Link className="main__link" to="/">Главная</Link>
                        <p className="main__text">/Статьи</p>
                    </div>
            </div>
        </section>
        </>
)
}