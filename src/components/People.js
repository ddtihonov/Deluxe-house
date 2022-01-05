import people_1 from '../images/team/people_1.png';
import people_2 from '../images/team/people_2.png';
import people_3 from '../images/team/people_3.png';
import people_4 from '../images/team/people_4.png';
import people_5 from '../images/team/people_5.png';
import people_6 from '../images/team/people_6.png';
import people_7 from '../images/team/people_7.png';
import people_8 from '../images/team/people_8.png';

export default function People () {

    return (
        <section className="people" >
            <div className="paragraph">
                    <h2 className="paragraph__title">Наша Команда</h2>
                    <p className="paragraph__text">Все наши специалисты дипломированы и имеют за плечами богатый опыт в сфере разработки дизайна интерьеров и архитектурной среды. Каждый из нас имеет не только Диплом о Высшем образовании и большой опыт, но и стремление постоянно совершенствовать свои знания в данной области и развивать свои профессиональные качества.</p>
            </div>   
            <ul className="table-smoll">
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_1} alt="человек"/>
                    <h3 className="table__title">Арслан Гаджиев</h3>
                    <p className="table__text">Прораб</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_2} alt="человек"/>
                    <h3 className="table__title">Екатерина Сушина</h3>
                    <p className="table__text">Дизайнер</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_3} alt="человек"/>
                    <h3 className="table__title">Балжан Дюсенгулова</h3>
                    <p className="table__text">Дизайнер-визуализатор</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_4} alt="человек"/>
                    <h3 className="table__title">Алексей Ни</h3>
                    <p className="table__text">Инженер-проектировщик</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_5} alt="человек"/>
                    <h3 className="table__title">Анель Сулейменова</h3>
                    <p className="table__text">Архитектор</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_6} alt="человек"/>
                    <h3 className="table__title">Меруерт Абишева</h3>
                    <p className="table__text">Дизайнер</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_7} alt="человек"/>
                    <h3 className="table__title">Ирина Ахмедова</h3>
                    <p className="table__text">Менеджер по работе с клиентами</p>
                </li>
                <li className="table-smoll__card_people">
                    <img className="table__image_people" src={people_8} alt="человек"/>
                    <h3 className="table__title">Гayxap Eлeycизoвa</h3>
                    <p className="table__text">Руководитель студии, дизайнер</p>
                </li>
            </ul>
        </section>
    )
    }