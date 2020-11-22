import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>KWEAVE.NET</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://unpkg.com/mvp.css" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
