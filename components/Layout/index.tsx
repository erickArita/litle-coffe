import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

type Props = {
  children?: ReactNode
  title?: string
}
function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
