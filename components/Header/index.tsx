import { Slider } from './Slider'
import { FaFacebook } from "react-icons/fa";
import { Parallax } from 'react-scroll-parallax';
import { use100vh } from 'react-div-100vh';
import { ParallaxProvider } from 'react-scroll-parallax'
import { Client } from '../../pages'
export default function Header({ isMovile }: Client) {
  const imgs: string[] = ['/rest/restaurant.jpg', '/rest/restaurant2.jpg',]
  const height = use100vh()
  console.log(Boolean(isMovile));
  return (
    <>
      <ParallaxProvider>
        <header className='header'>
          <div className="header__content">
            <div className='header__content__contact'>
              <div>
                <p>Más de nosotros</p>
                <a href={isMovile ?
                  "fb://coffeethelittle":
                  'https://www.facebook.com/coffeethelittle'}
                  target='__blank'  >
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className='header__main'>
              <Parallax y={[-20, 20]}>
                <div>
                  <h1 className='title'>the litle coffee</h1>
                  <p className='main__slogan roboto'>Disfruta de tu comida rodeado de naturaleza</p>
                </div>
                <button className='main__button roboto'>Ver Menu</button>
              </Parallax>
            </div>
            <Slider imgs={imgs} interval={10000} />
          </div>
        </header>
      </ParallaxProvider>
      <style jsx>{`
          .header{
            height: ${height}px;
          }
          .header__content{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            display: flex;
            align-items: center;
            height: inherit;
            
            font-size: 40px;
            text-align: center;
          }
          .header__content__contact{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;
            color: white;
            left: 3rem;
            height: 70%;
            font-family: var(--roboto)
          }
          .header__content__contact a{
            font-size: 20px;
            color: var(--white);
          }
          .header__content__contact a:hover{
            font-size: 20px;
            color: #2d88ff;
          }
          .header__content__contact p{
            font-size: 13px;
            font-family: var(--roboto);
            writing-mode: vertical-rl;
            margin-bottom: 3rem;
            z-index: 2;
          }
          .header__content__contact p::after{
            position: absolute;
            content:' ';
            height: 30px;
            margin-top: 10px;
            margin-right: 5px;
            border-right: 2px solid var(--white) ;
            z-index: 10;
          }
          .header__main{
            z-index: 1;
          
          }
          
         
          .main__slogan{
            font-size: 18px;
            color: var(--white);
          }
          
          .main__button{
             font-weight: 700;
            font-size: 15px;
            background: transparent;
            color: var(--grey);
            outline: none;
            border: solid 2px var(--white);
            padding: .5rem 1rem;
            cursor: pointer;
            border-radius: 5px;
          }
          .main__button:focus{
            outline: none;
          }
          .main__button:hover{
            border: solid 2px var(--orange-ligth);
          }

        
        @media (max-width:768px){
        /*media queries para el contenido a la izquierda  */
          .header__content__contact{
            height: max-content;
            flex-direction: row;
            width: 100%;
            height: 90%;
            align-items: flex-end;
            justify-content: center;
            left: 0;
          }
          .header__content__contact div{
            display: flex;
            justify-content: space-evenly;
            width: 15rem;
            align-items: center;

          }
          .header__content__contact p{
            writing-mode: horizontal-tb;
            margin: 0;
          }
          .header__content__contact p::after{
            height: 10px;
            width: 30px;
            border-top: 2px solid var(--white) ;
            border-right: none;
            margin-top: 5px;
            margin-left: 5px;
          }
        }
      `}</style>
    </>
  )
}