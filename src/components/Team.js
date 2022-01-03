import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import objects from '../images/team/objects.png';
import card from '../images/team/card.png';
import people_1 from '../images/team/people_1.png';
import people_2 from '../images/team/people_2.png';
import people_3 from '../images/team/people_3.png';
import people_4 from '../images/team/people_4.png';
import people_5 from '../images/team/people_5.png';
import people_6 from '../images/team/people_6.png';
import people_7 from '../images/team/people_7.png';
import people_8 from '../images/team/people_8.png';

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
        <div className="team__box">
            <ReactPlayer className="team__video" url='https://www.youtube.com/embed/bLwQnK6xplI' />
        </div>
        <div className="payment-procedure">
        <p className="payment-procedure__text">DELUXE HOUSE — это одна из самых успешных студий дизайна интерьера в Астане с командой профессионалов, объединенная желанием создавать неповторимые роскошные интерьеры в Астане и за ее пределами.</p>
        <p className="payment-procedure__text">Главная специализация студии — это дизайн квартир, домов и коммерческих помещений любого назначения. Задача компании — создание и реализация интерьеров, выделяющихся своим стилем и безупречным вкусом.</p>
        <p className="payment-procedure__text">Одним из самых немаловажных аспектов специфики нашей работы - отличное знание рынка, а значит, мы точно поможем сэкономить большой объем времени и средств!</p>
        </div>
        <section className='years'>
            <div className='years__box'>
                <img className="years__img" src={card} alt="дизайн"/>
                <div className='years__container'>
                    <h2 className="years__title"><span className="years__title_big">10</span> лет</h2>
                    <p className="years__title_smoll">успешной работы!</p>
                    <p className="years__text">Наша студия предлагает свои услуги на рынке дизайна интерьеров Астаны с 2011 года. За этот период нами было создано и реализовано уже более 200 проектов.</p>
                    <p className="years__text">У нас широкий ассортимент дизайн-услуг, и мы работаем с любыми помещениями, будь это квартира, коттедж, Торговый Центр, бутик, SPA, сауны, магазины, рестораны, кафе, бизнес-центры или офисы.</p>
                    <p className="years__text">Мы всегда точно знаем, что нужно нашим клиентам и можем предложить ему лучше, чем то, что он от нас ждет.</p>
                </div>
            </div>
        </section>
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
        <div className="button__box">
                <Link className="link-black" to="/articles">СТАТЬИ О ДИЗАЙНЕ</Link>
        </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Что мы делаем?</h2>
                <p className="paragraph__text">Мы умеем работать с помещениями любого типа и назначения: с удовольствием создадим жилое пространство или коммерческое помещение.</p>
        </div>
        <div className="team__box">
            <img className="team__img" src={objects} alt="дизайн"/>
        </div>
        
        </>
)
}