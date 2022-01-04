import React from 'react';
import inst from '../images/footer/inst.svg'
import vk from '../images/footer/vk.svg'
import fb from '../images/footer/fb.svg'
import pint from '../images/footer/pint.svg'
import map from '../images/footer/map.jpg'


export default function Footer () {

    return (
    <footer className="footer">
        <div className="footer__info">
            <div className="footer__box">
                <h4 className="footer__subtitle">Наш телефон</h4>
                <p className="footer__text">8 (700) 300-03-40</p>
                <p className="footer__text">8 (778) 800-03-40</p>
                <h4 className="footer__subtitle">Присоединяйтесь</h4>
                <ul className="footer__list">
                    <li className="footer__item"><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dh_studio/">
                        <img className="footer__social-icon" src={inst} alt="инстаграмм"/>
                    </a></li>
                    <li className="footer__item"><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://vk.com/dh_studio_kz">
                        <img className="footer__social-icon" src={vk} alt="в контакте"/>
                    </a></li>
                    <li className="footer__item"><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DHstudioKZ">
                        <img className="footer__social-icon" src={fb} alt="фейсбук"/>
                    </a></li>
                    <li className="footer__item"><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.pinterest.ru/dhstudiokz/_created/">
                        <img className="footer__social-icon" src={pint} alt="пинтерест"/>
                    </a></li>
                </ul>
            </div>
            <div className="footer__box">
                <h4 className="footer__subtitle">Наш адрес</h4>
                <p className="footer__text">Республика Казахстан,010000, г. Нур-Султан, ул. Достык 13</p>
                <h4 className="footer__subtitle">Написать на почту</h4>
                <p className="footer__text">dh.studio.kz@gmail.com</p>
            </div>
            <div className="footer__map">
                <img className="footer__map_image" src={map} alt="карта"/>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__text">Все права защищены.</p>
            <p className="footer__text">&#169;&nbsp;2021 Политика конфидициальности</p>
        </div>
    </footer>
)
}