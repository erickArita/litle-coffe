import Link from 'next/link'
import Layout from '../components/Layout'

function IndexPage() {
  return (
    <Layout title='Litle Coffee'>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/nosotros">
          About
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
