import { FC, useState } from 'react'
import Layout from '../components/Layout'
import NavContext, { initState } from '../services/navbar/navBarColor'
import '../styles/globals.css'
import 'normalize.css'

type Component = {
  Component: FC<any>
  pageProps: any[]
}

export default function MyApp({ Component, pageProps }: Component) {
  const [transparent, setTransparent] = useState<boolean>(initState.transparent)

  return (
    <NavContext.Provider value={{ transparent, setTransparent }}>
      <Layout title='Litle Coffee'>
        <Component {...pageProps} />
      </Layout>
    </NavContext.Provider>
  )

}