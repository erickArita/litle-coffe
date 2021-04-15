import Link from "next/link";
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import NavContext from "../../services/navbar/navBarColor";

const Navbar = () => {
  const { transparent } = useContext(NavContext)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <>
      <nav className='nav' >
        <div className="logo">
          <Link href='/'>
            <a >
              <Image
                src="/logo.webp"
                height={60}
                width={60}
                layout='fixed'
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div id='hamburger'>
          <FaBars onClick={() => setShowMenu(!showMenu)} />
        </div>
        <ul className={`links ${showMenu ? 'mobileMenu' : ''}`} >
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
          position: relative;
          display:flex;
          height:80px;
          justify-content: space-between;
          align-items: center;
          padding: 0 3rem;
          background-color: var(${transparent ? '--transparent' : '--white'});
          position: fixed;
          width:100%;
          box-sizing: border-box;
          top: 0;
          z-index: 2;
          box-shadow: 0 -1px 10px 2px ${!transparent && '#ccc'};
        }  
        .logo{
          cursor: pointer;
        }
        .links{
          display: flex;
          justify-content: space-around;
        }
        .link{
          list-style: none;
       
          border-radius: 40px;
          padding: 7px 10px;
        }
        .link a {
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--roboto);
          font-weight: 700;
          font-size: 14px;
          color:var(${transparent ? '--grey' : '--black'});
          transition: .2s linear;
        }
        .link a:hover {
          color: #e07f7f;
          transition: .2s linear;
        }
        #hamburger{
          cursor: pointer;
          display: none;
          z-index: 10;  
        }
       
        /* links en linea */
        @media (min-width:768px) {
          .links {
            display: flex;  
          }
        }
        /* oculto los links para mobile */
        @media (max-width:768px){
          .links{
            display: none;
          }
          #hamburger {
            display: unset;
            z-index: 10;
          }
        }
        
        .mobileMenu {
          position: absolute;
          display: flex ;
          flex-direction: column;
          left: 0;
          padding: 4rem; 
          padding: 0;
          background-color: #c7bbd3;
          width: 100vw;
          align-items: center;
        }
      `}</style>
    </>
  )
}
export default Navbar