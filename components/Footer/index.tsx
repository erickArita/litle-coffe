import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className='footer__text'>
          <p>Derechos reservados {new Date().getFullYear()} 	&#169; littleCoffee</p>
          <a className='icon' href={'https://www.facebook.com/coffeethelittle'}
            target='__blank'  >
            <FaFacebook />
          </a>
        </div>
        <div style={{textAlign:'center'}}>

          <p>¿Quieres una pagina como esta?</p>
          <p>Escribeme a <a href='https://www.facebook.com/erickmarleyarita/' target='__black'>Facebook</a> </p>
        </div>
      </footer>
      <style jsx>{`
        footer{
          display: flex;
          height: 20vh;
          justify-content: space-around;
          align-items: center;
        }
        .footer__text{
          display: flex;
          background-color: var(--white);
          color: var(--dark);
          height: 20vh;
          align-items: center;
          justify-content: space-around;
        }
        .icon {
          font-size: 20px;
          margin-left: 1rem;
          height: max-content;
        }
        @media (max-width:768px){
         flex-direction: column;
        }
        
      `}</style>
    </>
  )
}
