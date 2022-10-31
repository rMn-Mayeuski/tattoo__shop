import React, { FC, MouseEventHandler } from 'react';
import styles from "./Burger.module.scss";

interface MenuСondition {
    change?: boolean
    onClick: MouseEventHandler;
}

const Burger: FC<MenuСondition> = (props) => {

    const handlerStylesBurgerMenu = props.change ? styles.burgerActive : styles.burger;

    return (
        <div 
            className={handlerStylesBurgerMenu} 
            onClick={props.onClick}
        >
            <div className={styles.burgerTop}>
                <button>По категории</button>
                <button>По брендам</button>
            </div>
        </div>
    );
};

export default Burger;