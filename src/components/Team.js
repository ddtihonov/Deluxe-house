import { Link } from 'react-router-dom';



export default function Team () {

    return (
        <>
        <section className="team">
        <div className="main__info">
                <h2 className="main__title">Наша команда</h2>
                <div className="main__box">
                    <Link className="main__link" to="/">Главная</Link>
                    <p className="main__text">/О нас</p>
                </div>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Кто мы?</h2>
                <p className="paragraph__text">Мы не просто дизайн-студия, мы - команда талантливых людей, обладающих тонким чутьем, вкусом и большим опытом во главе с опытным и творческим руководителем.</p>
        </div>
        <div className="team__video">
            
        </div>
        </>
)
}