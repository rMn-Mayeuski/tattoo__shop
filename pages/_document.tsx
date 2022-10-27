import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
    <Html>
        <Head>
            <meta 
                name="description" 
                content="Лучшие товары в мире татуировок, Оборудование и расходники для самых ярких и качественных работ" 
            />
            <meta name='keywords' content=' Тату наборы, Тату машинки, Тату иглы, Аксессуары, Защита, ёмкости, расходники'/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    <body>
        <Main />
        <NextScript />
    </body>
    </Html>
    )
}