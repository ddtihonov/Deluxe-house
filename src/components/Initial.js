import inst from '../images/footer/inst.svg'
import vk from '../images/footer/vk.svg'
import fb from '../images/footer/fb.svg'
import pint from '../images/footer/pint.svg'
import LOGO from '../images/ini/LOGO.svg'
import INTERIOR_DESIGN from '../images/ini/INTERIOR_DESIGN.png'

export default function Initial (props) {

    return (
    <section className="initial">
        <div className="initial__box">
                <p className="initial__subtitle">СТУДИЯ&nbsp;ДИЗАЙНА&nbsp;ИНТЕРЬЕРА</p>
                <div className="initial__line"></div>
                <ul className="initial__list">
                    <li className="initial__item"><a className="initial__link" target="_blank" href="https://www.instagram.com/dh_studio/"rel="noopener noreferrer" >
                        <img className="initial__social-icon" src={inst} alt="инстаграмм"/>
                    </a></li>
                    <li className="initial__item"><a className="initial__link" target="_blank" href="https://vk.com/dh_studio_kz" rel="noopener noreferrer">
                        <img className="initial__social-icon" src={vk} alt="в контакте"/>
                    </a></li>
                    <li className="initial__item"><a className="initial__link" target="_blank" href="https://www.facebook.com/DHstudioKZ" rel="noopener noreferrer">
                        <img className="initial__social-icon" src={fb} alt="фейсбук"/>
                    </a></li>
                    <li className="initial__item"><a className="initial__link" target="_blank" href="https://www.pinterest.ru/dhstudiokz/_created/" rel="noopener noreferrer">
                        <img className="initial__social-icon" src={pint} alt="пинтерест"/>
                    </a></li>
                </ul>
            </div>
            <div className="initial__box-image">
                <img className="initial__logo" src={LOGO} alt="логотип"/> 
                <div className="initial__info">
                    <h1 className="initial__title">РОСКОШНЫЙ <span className="title__selection title__color">ДИЗАЙН 
                        ИНТЕРЬЕРА</span> В НУР-СУЛТАНЕ</h1>
                    <p className="initial__text">Мы создаем уникальные проекты любой сложности на высоком уровне качества!</p>
                    <button className="initial__button" onClick={props.openPopup}>Расчет стоимости</button>
                </div>
                <img className="label__initial" src={INTERIOR_DESIGN} alt="надпись"/>
            </div>
    </section>
)
}