import Image from 'next/image';
import React, { FC } from 'react';
import favorite from "../../../../assets/img/Header/favorite.svg"
import styles from "./Favorite.module.scss"

const Favorite: FC = () => {
    return (
        <button className={styles.favorite}>
            <Image src={favorite} alt="Favorite"/>
        </button>
    );
};

export default Favorite;