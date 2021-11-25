import React from 'react';
import { Link } from 'react-router-dom';

import phone from '../images/header/phone.svg';
import logo_header from '../images/header/logo_header.svg';

export default function Header() {

    return (
    <header className="header">
        <Link className="header__logo-link" to="/">
            <img  className="header__logo" src={logo_header} alt="логотип"/>
        </Link>   
        <div className="header__menu menu">
            <nav className="menu__body">
                <ul className="menu__list">
                    <li className="menu__item"><Link className="menu__link" to="/services">Услуги</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/repiair">Ремонт</Link></li>
                    <li className="menu__item menu__item_parent">
                        <a href="#" className="menu__link">Портфолио
                            <ul className="menu__submenu">
                                <li className="menu__submenu_item"><Link className="menu__link" to="/housing">Жилые помещения</Link></li>
                                <li className="menu__submenu_item"><Link className="menu__link" to="/commercial">Коммерческие помещения</Link></li>
                            </ul>
                        </a>
                    </li>
                    <li className="menu__item"><a href="#" className="menu__link">О нас</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Статьи</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                </ul>
            </nav>
        </div>
        
        <div className="header__box">
            <img  className="header__phone-image" src={phone} alt="значек телефона"/>
            <h2 className="header__phone">8 (700) 300-03-40</h2>
        </div>    
    </header>
)
}