import React, { FC } from 'react';
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div>FOOTER</div>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;