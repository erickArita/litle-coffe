import Link from "next/link";
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavContext } from "../../services/navbar/navBarColor";
import Links from "./Links";

const Navbar = () => {
  const { transparent } = useNavContext()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <>
      <nav className='nav' >
        <div className="logo">
          <Link href='/'>
            <a >
              <Image
                src="/logo.webp"
                height={transparent ? 60 : 45}
                width={transparent ? 60 : 45}
                layout='fixed'
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div id='hamburger'>
          <FaBars onClick={() => { setShowMenu(!showMenu) }} />
        </div>
        <Links showMenu={showMenu} transparent={transparent} />
      </nav>
      <style jsx>{`
        .nav{
          position: relative;
          display:flex;
          height:${transparent ? '80' : '50'}px;
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
          transition: .5s all;
        }
         

        .logo{
          cursor: pointer;
        }
        
        #hamburger{
          cursor: pointer;
          display: none;
          z-index: 10;  
          color: var(${showMenu || !transparent? '--dark' : '--grey'});
        }
       
        @media (max-width:768px){
          #hamburger {
            display: unset;
            z-index: 10;
          }
        }
      `}</style>
    </>
  )
}
export default Navbar