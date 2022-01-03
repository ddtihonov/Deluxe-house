import { Link } from 'react-router-dom';

import card_1 from '../images/advantage/card_1.png'
import card_2 from '../images/advantage/card_2.png'
import card_3 from '../images/advantage/card_3.png'
import card_4 from '../images/advantage/card_4.png'

export default function Advantage () {

    return (
        <section className="advantage">
        <ul className="table-smoll">
            <li className="table-smoll__card">
                <img className="table-smoll__image" src={card_1} alt="доллар"/>
                <h3 className="table-smoll__title">Цена и качетво лучшее соотношение</h3>
                <p className="table-smoll__text">Для получения наиболее оптимального результата, при этом не потеряв больших средств, мы грамотно распределяем бюджет Заказчика еще на стадии проектирования.
                    При этом Вы не потеряете в качестве!</p>
            </li>
            <li className="table-smoll__card">
                <img className="table-smoll__image" src={card_2} alt="человек"/>
                <h3 className="table-smoll__title">КОНТРОЛИРУЕМ
                    И КООРДИНИРУЕМ</h3>
                <p className="table-smoll__text">Рабочие не будут Вас донимать своими вопросами. Мы берем под свой авторский контроль работу отделочной бригады. 
                    В итоге Вы сэкономите кучу времени и получите полностью соответствующий проекту интерьер</p>
            </li>
            <li className="table-smoll__card">
                <img className="table-smoll__image" src={card_3} alt="диван"/>
                <h3 className="table-smoll__title">КОМПЛЕКТУЕМ
                    И ДЕКОРИРУЕМ</h3>
                <p className="table-smoll__text">Мы отлично знаем рынок отделочных материалов, поставщиков мебели, освещения и других предметов интерьера.
                    Мы подберем Вам все в соответствии с Вашим бюджетом!</p>
            </li>
            <li className="table-smoll__card">
                <img className="table-smoll__image" src={card_4} alt="звездочки"/>
                <h3 className="table-smoll__title">СТИЛЬНО И РОСКОШНО
                    со вкусом </h3>
                <p className="table-smoll__text">Мы разрабатываем стильные и неповторимые интерьеры с утонченной роскошью. 
                    Какой бы ни была задача, 
                    Вы всегда можете быть уверены, что наша работа Вас приятно удивит и очарует!</p>
            </li>
        </ul>
        <div className="button__box">
            <Link className="link-black" to="/team">О НАШЕЙ КОМАНДЕ</Link>
            <Link className="link-black link-black__margin" to="/articles">СТАТЬИ О ДИЗАЙНЕ</Link>
        </div>
    </section>
)
}