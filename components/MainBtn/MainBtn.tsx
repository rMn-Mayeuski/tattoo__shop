import React, { FC, MouseEventHandler, ReactNode } from 'react';
import styles from "./MainBtn.module.scss"

export enum BtnVariants  {
    withBackground = "withBackground",
    withoutBackground = "withoutBackground",
}

export enum BtnTypeProps {
    button = "button",
    submit ="submit",
    reset = "reset"
}

interface IButtonProps {
    variant: BtnVariants,
    children: ReactNode,
    type?: BtnTypeProps,
    onClick?: MouseEventHandler,
    clicked?: boolean,
}

const MainBtn: FC<IButtonProps> = ({
    variant = BtnVariants.withBackground,
    type = BtnTypeProps.button,
    children,
    onClick = () => {} ,
    clicked = false,
}) => {
    return (
        <button type={type} className={
            `${
                variant === BtnVariants.withBackground 
                    ? 
                styles.buttonWithBckg 
                    :
                styles.buttonWithoutBckg
            }`
        }>
            {children}
        </button>
    );
};

export default MainBtn;