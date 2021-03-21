import { FC } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'normalize.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

type ss = {
  Component: FC<any>
  pageProps: any[]
}
export default function MyApp({ Component, pageProps }: ss) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  )
}