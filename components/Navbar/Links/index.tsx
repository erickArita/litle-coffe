import Link from "next/link"
import scrollTo from "../../../hooks/useScroll"

const Links = ({ showMenu, transparent }: {
  showMenu: boolean,
  transparent: boolean,
}) => {
  const changeColorLink = (): string => !transparent ? 'dark' : 'white'
  return (
    <>
      <ul className={`links mobileMenu ${showMenu ? 'mobileMenu--open' : 'mobileMenu--close'}`} >

        <li className='link'>
          <Link href="/" >
            <a onClick={() => scrollTo('.header')}
              className={`${changeColorLink()}`}>inicio</a>
          </Link>
        </li>
        <li className='link'>
          <Link href="/#experience" >
            <a className={`${changeColorLink()}`}
              onClick={() => scrollTo('#experience')}>Experiencia</a>
          </Link>
        </li>
        <li className='link'>
          <Link href="/#speciales">
            <a className={`${changeColorLink()}`}
              onClick={() => scrollTo('#speciales')}>Especiales</a>
          </Link>
        </li>
        <li className='link'>
          <Link href="/#menu">
            <a className={`${changeColorLink()}`}
              onClick={() => scrollTo('#menu')}>menu</a>
          </Link>
        </li>

        <li className='link'>
          <Link href="/nosotros">
            <a className={`${changeColorLink()}`}
              onClick={() => scrollTo('.about')}
            > nosotros</a>
          </Link>
        </li>
        <li className='link'>
          <Link href="/nosotros#location">
            <a className={`${changeColorLink()}`}
              onClick={() => scrollTo('#location')}
            >Ubicación</a>
          </Link>
        </li>
        <li className='link'>
          <Link href="/nosotros#contacto">
            <a className={`${changeColorLink()}`}
            onClick={() => scrollTo('.contacto')}
            >Contacto</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .links {
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
          transition: .2s linear;
        }
        .link a:hover {
          color: #e07f7f;
          transition: .2s linear;
        }
          /* links en pc*/
          @media (min-width:768px) {
          .links {
            display: flex;  
          }
         
        }
        @media (max-width:768px){
       
          .links{
            display: none;
          }
          .links a {
            color: var(--dark);
          }
          .mobileMenu {
            display: flex;
            position: absolute;
            flex-direction: column;
            left: 0;
            z-index: -1;
            padding: 0; 
            padding: 2rem 0; 
            color: var(--dark);
            background-color: var(--white);
            width: 100vw;
            align-items: center;
            margin: 0;
            top: 0;
          }
          .mobileMenu--open{
            animation: openMenu .5s both;
          }
          .mobileMenu--close{
            top: -20rem;
            animation: closeMenu .5s both;
          }
        }
        @keyframes openMenu {
          from {
            transform: translateY(-20rem);
          }

          to {
            transform: translateY(0rem);
          }
        }
        @keyframes closeMenu {
          from {
            transform: translateY(20rem);
          }

          to {
            transform: translateY(0rem);
          }
        }
      `}</style>
    </>
  )
}

export default Links
