import partners from '../images/partners/partners.png'
import partners_1 from '../images/partners/partners_1.png'
import partners_2 from '../images/partners/partners_2.png'
import partners_3 from '../images/partners/partners_3.png'
import partners_4 from '../images/partners/partners_4.png'
import partners_5 from '../images/partners/partners_5.png'
import partners_6 from '../images/partners/partners_6.png'
import partners_7 from '../images/partners/partners_7.png'
import partners_8 from '../images/partners/partners_8.png'
import partners_9 from '../images/partners/partners_9.png'
import partners_10 from '../images/partners/partners_10.png'
import partners_11 from '../images/partners/partners_11.png'
import partners_12 from '../images/partners/partners_12.png'

export default function Partners () {

    return (
        <section className="partners">
        <div className="partners__box">
            <img className="partners__image" src={partners} alt="надпись"/>
            <h2 className="title">Наши <span className="title__selection title__color">уважаемые партнеры,</span> которые предоставляют <span className="title__selection title__color">скидки</span> нашим клиентам!</h2>
        </div>
        <ul className="partners__list">
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://shop.miele.kz/"><img className="partners__image-link" src={partners_1} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://www.bravomebel.kz/"><img className="partners__image-link" src={partners_2} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://www.lorena-kuhni.kz/"><img className="partners__image-link" src={partners_3} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://www.smeg.com/kz/"><img className="partners__image-link" src={partners_4} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://kazintercool.kz/"><img className="partners__image-link" src={partners_5} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://www.desiderio.kz/"><img className="partners__image-link" src={partners_6} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://mirparketa.kz/"><img className="partners__image-link" src={partners_7} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://www.gallery.kz/"><img className="partners__image-link" src={partners_8} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://ideadecor.kz/"><img className="partners__image-link" src={partners_9} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://ideadecor.kz/sofia"><img className="partners__image-link" src={partners_10} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://euroelectric.kz/"><img className="partners__image-link" src={partners_11} alt="партнер"/></a>
            </li>
            <li className="partners__cell">
                <a className="partners__link" target="_blank" href="https://adelfi-furniture.kz/"><img className="partners__image-link" src={partners_12} alt="партнер"/></a>
            </li>
        </ul>
    </section>
)
}