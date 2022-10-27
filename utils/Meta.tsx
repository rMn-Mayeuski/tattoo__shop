import Head from "next/head";
import { FC } from "react";

interface IHeadProps {
    title: string,
    description: string,
    ico?: string,
}

const Meta: FC<IHeadProps> = ({title, description, ico}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta 
                name="description" 
                content={description} 
            />
            <link rel="icon" href={ico} />
        </Head>
    );
};

export default Meta;