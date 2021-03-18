import Link from 'next/link'

function IndexPage() {
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/nosotros">
          About
        </Link>
      </p>
    </>
  )
}

export default IndexPage
