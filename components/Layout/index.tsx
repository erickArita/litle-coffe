import { ReactNode } from 'react'
import Link from 'next/link'
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
