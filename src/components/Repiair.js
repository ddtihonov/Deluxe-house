import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import RatesRepair from './RatesRepair';
import Popup from './Popup.js'; 
import img from '../images/repiair/img.png'
import CapRepair from './CapRepair';

import we_image from '../images/we/we_image_2.png'

export default function Repiair () {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopup = () => {
        setIsPopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsPopupOpen(false);
    }

    // обработчики закрытия
    function handleClosePopup(evt) {
        if (
            evt.target.classList.contains('popup')
        ) {
            closeAllPopups();
        }
    }

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.keyCode === 27) closeAllPopups();
        }
    
        document.addEventListener('keydown', handleEscClose);
    
        return () => document.removeEventListener('keydown', handleEscClose);
    }, []);
    return (
        <>
        <CapRepair
            title="Ремонт квартир любой сложности"
            link="/Ремонт"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Что мы можем предложить?</h2>
                <p className="paragraph__text">Наш богатый опыт ведения контроля за отделочными работами позволил нам наладить менеджмент на высоком уровне профессионализма.</p>
                <p className="paragraph__text">С нами ремонт и отделка квартир и общественных помещений станут приятным событием. Производить все работы по ремонту и отделке будет большая высоко квалифицированная бригада мастеров со стажем ремонтно-отделочных работ более 10 лет.</p>
        </div>
        <Portfolio
            title="Более 200 успешных проектов"
        />
        <section className="payment-procedure">
            <h2 className="payment-procedure__title">Порядок оплаты</h2>
            <div className='payment-procedure__container'>
                <div className='payment-procedure__box'>
                    <p className='payment-procedure__text'>Грамотно составленный Договор на оказание услуг даст Вам юридическую защищенность. Оплата производится поэтапно:</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>35% </span> от общей суммы - предоплата</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>35% </span> от общей суммы - после завершения черновых работ</p>
                    <p className='payment-procedure__text'><span className='payment-procedure__number'>30% </span> от общей суммы - после ввода объекта в эскплуатацию</p> 
                </div>
                <div className='payment-procedure__box'>
                    <p className='payment-procedure__text'>Мы выполняем свои обязанности качественно, точно в указанные сроки и строго по согласованной заранее цене. На объекте производится технический надзор специалистом. Наши прорабы не только контролируют весь рабочий процесс, но и принимают в нём активное участие. Мы делаем ремонт "под ключ" с установкой дверей, вывозом мусора и уборкой помещения.</p>
                </div>
            </div>
        </section>
        <section className="time">
            <div className="time__box">
                <button className="time__button" type="submit">Ремонт без дизайна со стандартным ремонтом</button>
                <button className="time__button" type="submit">Ремонт с дизайном и нестандартным ремонтом</button>
            </div>
            <ul className="time__list">
                <li className="time__item"></li>
                <li className="time__item time__item_light"></li>
                <li className="time__item"></li>
                <li className="time__item time__item_light"></li>
            </ul>
        </section>                          
        <RatesRepair
            openPopup={handlePopup}
        />
        <section className="we">
            <h2 className="title__smoll">Как мы работаем?</h2>
            <div className="line"></div>
            <div className="we__box">
                <img className="we__image" src={we_image} alt="ремонт"/>
                <div className="we__info">
                    <p className="we__text">Студия дизайна DELUXE HOUSE уже более 10 лет выполняет услуги по ремонту и отделочным работам квартир, домов и коммерческих помещений. Мы ремонтируем квартиры, делаем отделку офисов, домов в Астане (Нур-Султане) на высоком профессиональном уровне и не затягиваем оговоренные сроки. Для нас очень важно сдавать в эксплуатацию качественно выполненные объекты, поэтому мы всегда стремимся к совершенству в ходе исполнения своих обязательств. В нашей команде только профессионалы высокого уровня квалификации. Мы делает тщательный отбор своих специалистов, для которых ответственность всегда стоит на первом месте. Перед началом ремонта мы всегда оговариваем сроки по каждому из этапов и предупреждаем о возможных проблемах после тщательного осмотра помещения нашими техническими специалистами.
                        </p>
                    <p className="we__text">Накопив богатый опыт в работе с помещениями самого разного назначения и сложности, нам удалось сформировать очень сильную команду профессионалов самой высокой квалификации по ремонту и отделке.
                    </p>
                    <p className="we__text">Менеджмент ведения всех этапов и бизнесс-процессов был нами хорошо выстроен и отточен. Если Вы цените свое пространство, время, нервы и бюджет, то Вы будете на верном пути, обращаясь в нашу компанию.</p>
                </div>
            </div>
            <div className="button__box">
                <Link className="link-black" to="/services">Услуги и цены</Link>
            </div>
        </section>
        <img className="repiair__img" src={img} alt="надпись"/>
        <div></div>
        <Popup
            isOpen={isPopupOpen} 
            close={handleClosePopup}
            onClose={closeAllPopups} 
        />  
        </>
)
}