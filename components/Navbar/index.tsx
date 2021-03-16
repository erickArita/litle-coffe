import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          Inicio
        </Link>
        <Link href="/nosotros">
          Nosotros
        </Link>
        <Link href="/historia">
          Historia
        </Link>
      </nav>

    </>
  )
}