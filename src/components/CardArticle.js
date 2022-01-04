import { Link } from 'react-router-dom';


export default function CardArticle (props) {

    return (
        <li className="articles__card">
            <img className="articles__image" src={props.image} alt="дизайн интерьера"/>
            <h3 className="articles__title">{props.title}</h3>
            <p className="articles__text">{props.text}</p>
            <div className="articles__box">
                <div className="articles__line"></div>
                <Link className="articles__link" to="/article"
                subtitle={props.subtitle}
                >подробнее</Link>
            </div>
        </li>
)
}