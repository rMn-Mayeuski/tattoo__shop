import Image from 'next/image';
import React, { FC } from 'react';
import user from "../../../../assets/img/Header/user.svg"
import styles from "./User.module.scss"

const User: FC = () => {
    return (
        <button className={styles.user}>
            <Image src={user} alt="User"/>
        </button>
    );
};

export default User;