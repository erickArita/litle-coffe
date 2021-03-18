import { FC } from 'react'
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
      <Component {...pageProps} />
    </Layout>
  )
}