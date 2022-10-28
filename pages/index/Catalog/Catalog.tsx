import React, { FC } from 'react';
import MainBtn, { BtnTypeProps, BtnVariants } from '../../../components/MainBtn/MainBtn';
import MainLink, { LinkVariants } from '../../../components/MainLink/MainLink';
import styles from "./Catalog.module.scss"

const Catalog: FC = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.catalogContent}> 
                    <MainBtn 
                        variant={BtnVariants.withoutBackground} 
                        children="Кнопка"
                    />
                    <MainLink href='/dgf' variant={LinkVariants.withoutBackground} children="Ссылка"/>
                </div>
            </div>
        </section>
    );
};

export default Catalog;