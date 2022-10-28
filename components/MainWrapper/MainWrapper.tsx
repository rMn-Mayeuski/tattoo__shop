import React, { FC, ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss";

interface IMainWrapperProps {
    children: ReactNode,
}

const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {
    return (
        <>
            <Header/>
                <main className={styles.wrapper}>
                    {children}
                </main>
            <Footer/>
        </>
    );
};

export default MainWrapper;