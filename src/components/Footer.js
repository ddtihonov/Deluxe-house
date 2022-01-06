import React from 'react';
import inst from '../images/footer/inst.svg'
import vk from '../images/footer/vk.svg'
import fb from '../images/footer/fb.svg'
import pint from '../images/footer/pint.svg'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useState } from 'react';

export default function Footer () {
    
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

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
            <YMaps className="footer__map">
                <Map  width='100%' height='300px' defaultState={{ center: [51.125787, 71.434472], zoom: 14}}>
                    <Placemark geometry={[51.126709, 71.434840]}
                    options={{
                        iconLayout: 'default#image',
                        iconImageSize: [40, 40],
                        iconImageHref: 'https://ddtihonov.github.io/Deluxe-house/static/media/LOGO.7c9f528ef08f1df400e3eebdbab30b94.svg',
                    }}
                    />
                </Map>
            </YMaps>
        </div>
        <div className="footer__copyright">
            <p className="footer__text">Все права защищены.</p>
            <p className="footer__text">&#169;&nbsp;2021 Политика конфидициальности</p>
        </div>
        <button className="footer__button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </footer>
)
}