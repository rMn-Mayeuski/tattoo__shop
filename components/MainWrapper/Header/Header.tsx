import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import logo from "../../../assets/img/Header/logo.svg"
import styles from "./Header.module.scss"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>

                    </div>
                    
                    <Link href={"/"}>
                        <Image 
                            className={styles.headerTopLogo} 
                            src={logo} 
                            alt={'logo'} 
                        />
                    </Link>
                    
                    <div className={styles.headerTopRight}>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;