import Image from 'next/image';
import React, { FC } from 'react';
import banner from "../../../assets/img/Banner/Banner.png"
import styles from "./Banner.module.scss"

const Banner: FC = () => {
    return (
        <section className={styles.banner}>
            <Image priority src={banner} alt={"banner image"}/>
        </section>
    );
};

export default Banner;