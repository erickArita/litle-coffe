import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
          <Link href="/">
            Home
          </Link>{' '}
        |{' '}
          <Link href="/about">
            About
          </Link>{' '}
        |{' '}
          <Link href="/users">
            Users List
          </Link>{' '}
        </nav>
    )

}