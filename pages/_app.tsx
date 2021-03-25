import { FC } from 'react'
import 'normalize.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

type Component = {
  Component: FC<any>
  pageProps: any[]
}
export default function MyApp({ Component, pageProps }: Component) {
  return (
    <Layout title='Litle Coffee'>
      <Component {...pageProps} />
    </Layout>
  )
}