import { Link } from "react-router-dom"


export default function PageHousing (props) {

    return (
        <>
        <section className="beginning">
        <div className="main__info">
                <h2 className="main__title">{props.title}</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/Жилые помещения</p>
                </div>
            </div>
        </section>
        </>
)
}