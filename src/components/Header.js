import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import phone from '../images/header/phone.svg';
import logo_header from '../images/header/logo_header.svg';

export default function Header() {

    const [isDataOpen, setIsDataOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function openData () {
        setIsDataOpen(true)
    }

    function closeData () {
        setIsDataOpen(false)
    }

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
                        <p  className="menu__link" onClick={() => setIsActive(!isActive)}>Портфолио</p>
                            {isActive && 
                                <ul className="menu__submenu">
                                    <li className="menu__submenu_item"><Link className="menu__link" to="/housing">Жилые помещения</Link></li>
                                    <li className="menu__submenu_item"><Link className="menu__link" to="/commercial">Коммерческие помещения</Link></li>
                                </ul>
                            } 
                    </li>
                    <li className="menu__item"><Link className="menu__link" to="/team">О нас</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/articles">Статьи</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/contacts">Контакты</Link></li>
                </ul>
            </nav>
        </div>
        
        <div className="header__box">
            <img  className="header__phone-image" src={phone} alt="значек телефона"/>
            <h2 className="header__phone">8 (700) 300-03-40</h2>
        </div>
        <div className={`menu__icon ${isDataOpen ? 'close' : ''}`} onClick={openData}>
            <span></span>
        </div>
        <div className={`menu-mobile ${isDataOpen ? 'active' : ''}`}>
            <button className="header__close-icon" type="button" aria-label="закрыть" onClick={closeData}></button>
            <nav className="menu-mobile__body">
                <ul className="menu-mobile__list">
                    <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/services">Услуги</Link></li>
                    <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/repiair">Ремонт</Link></li>
                    <li className="menu-mobile__item">
                        <p className="menu-mobile__link_smoll">Портфолио</p>
                        <ul className="menu-mobile__list_smoll">
                                <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/housing">Жилые помещения</Link></li>
                                <li className="menu-mobile__item"><Link className="menu-mobile__link menu-mobile__link_smoll" to="/commercial">Коммерческие помещения</Link></li>
                        </ul>
                    </li>
                    <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/team">О нас</Link></li>
                    <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/articles">Статьи</Link></li>
                    <li className="menu-mobile__item"><Link className="menu-mobile__link" to="/contacts">Контакты</Link></li>
                </ul>
            </nav>
            <div className="menu-mobile__box">
                <img  className="menu-mobile__phone-image" src={phone} alt="значек телефона"/>
                <h2 className="menu-mobile__phone">8 (700) 300-03-40</h2>
            </div>
        </div>   
    </header>
)
}