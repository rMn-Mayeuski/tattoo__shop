import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import logo from "../../../assets/img/Header/logo.svg"
import phone from "../../../assets/img/Header/Call.svg"
import email from "../../../assets/img/Header/mail.svg"
import telegram from "../../../assets/img/Footer/Telegram.svg"
import viber from "../../../assets/img/Footer/Viber.svg"
import viber2 from "../../../assets/img/Footer/Viber2.svg"
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentLeft}>
                        <div className={styles.footerContentLeftLogo}>
                            <Link href={"/"}>
                                <Image src={logo} alt="Logo"/>
                            </Link>
                            <a href="#">Политика конфенедциальности</a>
                        </div>
                        <div className={styles.footerContentLeftMenu}>
                            <Link href={"/404"}>Промокоды</Link>
                            <Link href={"/404"}>Скидки</Link>
                            <Link href={"/404"}>Помощь</Link>
                        </div>
                        <div className={styles.footerContentLeftMenu}>
                            <Link href={"/404"}>О нас</Link>
                            <Link href={"/404"}>Контакты</Link>
                        </div>
                    </div>
                    <div className={styles.footerContentRight}>
                        <div className={styles.footerContentRightSocials}>
                            <a 
                                className={styles.footerContentRightSocialsNumber}
                                href="tel:8 800 600-61-91"
                            >
                                <Image src={phone} alt="Phone number"/>
                                8 800 600-61-91
                            </a>
                            <a href="#">
                                <Image 
                                    className={styles.footerContentRightSocialsLogo} 
                                    src={telegram} 
                                    alt="Telegram logo"
                                />
                            </a>
                            <a href="#">
                                <Image 
                                    className={styles.footerContentRightSocialsLogo} 
                                    src={viber} 
                                    alt="Viber logo"
                                />
                            </a>
                            <a href="#">
                                <Image 
                                    className={styles.footerContentRightSocialsLogo} 
                                    src={viber2} 
                                    alt="Viber logo"
                                />
                            </a>
                        </div>
                        <p className={styles.footerContentRightWorkH}>
                        Время работы: с 9:00 до 20:00 по мск
                        </p>
                        <a  className={styles.footerContentRightEmail}
                            href="mailto:Mr.Driskell@mail.ru"
                        >
                            <Image src={email} alt="Email logo"/>
                            Mr.Driskell@mail.ru
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;