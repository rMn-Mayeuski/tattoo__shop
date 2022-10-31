import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import logo from "../../../assets/img/Header/logo.svg"
import phone from "../../../assets/img/Header/Call.svg"
import email from "../../../assets/img/Header/mail.svg"
import burger from "../../../assets/img/Header/burger.svg"
import styles from "./Header.module.scss"
import Cart from './Cart/Cart';
import Favorite from './Favorites/Favorite';
import User from './User/User';
import Search from './Search/Search';
import Burger from './Burger/Burger';

const Header: FC = () => {

    const [menuActive, setMenuActive] = useState(false);
    const burgerMenuActive = () => setMenuActive(!menuActive)

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTopLeftContent}>
                            <a className={styles.headerTopLeftContentNumber}
                                href="tel:+7 952 552-52-52">
                                    <Image src={phone} alt="phone"/>
                                    +7 952 552-52-52
                            </a>
                            <div className={styles.headerTopLeftContentSocials}>
                                <a href="#">
                                Viber
                                </a>
                                <a href="#">
                                Whats App
                                </a>
                                <a href="#">
                                Telegram
                                </a>
                            </div>
                        </div>
                        <a className={styles.headerTopLeftContentEmail}
                            href="mailto:Mr.Driskell@mail.ru"
                        >   
                            <Image src={email} alt="Email"/>
                            Mr.Driskell@mail.ru
                        </a>
                    </div>
                    
                    <Link 
                        className={styles.headerTopLogo} 
                        href={"/"} 
                        >
                            <Image 
                                src={logo} 
                                alt={'logo'} 
                            />
                    </Link>
                    
                    <div className={styles.headerTopRight}>
                        <Cart/>
                        <Favorite/>
                        <User/>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.headerBottomLeft}>
                        <div className={styles.headerBottomLeftBurger} onClick={burgerMenuActive}>
                            <h2>Каталог</h2>
                            <Image src={burger} alt="Burger menu"/>
                        </div>
                        <Burger change={menuActive} onClick={burgerMenuActive}/>
                    </div>

                    <Search/>

                    <nav className={styles.headerBottomRight}>
                        <Link href="/404">Промокоды</Link>
                        <Link href="/404">Скидки</Link>
                        <Link href="/404">Помощь</Link>
                        <Link href="/404">О нас</Link>
                        <Link href="/404">Контакты</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;