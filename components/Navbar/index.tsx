import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {  
  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <Image
            src="/logo.webp"
            height={60}
            width={60}
            layout='fixed'
            alt="logo"
          />
        </div>
        <ul className="links">
          <li className='link'>
            <Link href="/">
              <a>inicio</a>
            </Link>
          </li>
          <li className='link'>
            <Link href="/nosotros"  >
              <a>nosotros</a>
            </Link>
          </li>
          <li className='link'>
            <Link href="/contacto">
              <a>contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .nav{
          display:flex;
          height:80px;
          justify-content: space-between;
          align-items: center;
          padding: 0 3rem;
          background-color: var(--trasparent);
          position: fixed;
          width:100%;
          box-sizing: border-box;
          top: 0;
          z-index: 1;
        }  
        .links{
          display: flex;
          justify-content: space-around;
        }
        .link{
          list-style: none;
          color:var(--white);
          border-radius: 40px;
          padding: 7px 10px;
        }
        .link a {
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--roboto);
          font-weight: 700;
          font-size: 14px;
          color:var(--grey);
        }
      `}</style>
    </>
  )
}