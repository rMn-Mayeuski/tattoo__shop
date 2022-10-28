import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import styles from "./MainLink.module.scss"

export enum LinkVariants  {
    withBackground = "withBackground",
    withoutBackground = "withoutBackground",
}

interface IMainLinkProps {
    href: string,
    variant: LinkVariants,
    children: ReactNode,
}

const MainLink: FC<IMainLinkProps> = ({
    href,
    variant = LinkVariants.withBackground,
    children,
}) => {
    return (
        <Link 
            href={href} 
            className={`${
                variant === LinkVariants.withBackground 
                    ? 
                styles.linkWithBckg
                    :
                styles.linkWithoutBckg
            }`}>
            {children}
        </Link>
    );
};

export default MainLink;