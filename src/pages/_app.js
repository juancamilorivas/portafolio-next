import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '@camilo/styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Camilo's Portafolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp