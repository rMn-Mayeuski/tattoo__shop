import Image from 'next/image';
import React, { FC } from 'react';
import cart from "../../../../assets/img/Header/cart.svg"
import styles from "./Cart.module.scss"

const Cart: FC = () => {
    return (
        <button className={styles.cart}>
            <Image src={cart} alt="Cart"/>
        </button>
    );
};

export default Cart;