import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Tattoo shop</title>
      </Head>
      {router.asPath === "/" 
          ? 
        <Component {...pageProps} />
          :
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      }
    </>
  )
}
