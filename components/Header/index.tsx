import Image from 'next/image'
import { useCarrousel } from "../../hooks/useCarrousel"
// no funciona la transicion de imagenes,
// tiene que haber un efecto de blur 
export default function Header() {
  const imgs: string[] = ['/rest/restaurant2.jpg', '/rest/restaurant.jpg']
  const img = useCarrousel(imgs)
  return (
    <>
      <header className='header'>
        <div className="header__content">
          <h1 className='title'>the litle coffee</h1>
          <Image
            src={img}
            className='header__image'
            objectFit='cover'
            layout='fill'
            loading='lazy'
          />
        </div>
      </header>
      <style jsx>{`
          header{
            height: 110vh;
          }
          .header__image{
            z-index: -1;
            animation: traslate 1.5s ease;
            background: linear-gradient(to right,rgba(68, 61, 61,.2),#c760604b);
          }
          .header__content{
            display: flex;
            justify-content: center;
            align-items: center;
            display: flex;
            align-items: center;
            height: inherit;
            font-family: var(--cursiva);
            font-size: 40px;
            text-align: center;
          }
          .title{
            color: var(--white);
            text-transform: capitalize;
            z-index: 4;
          }
          @keyframes traslate{
            from{ 
              
              filter: blur(5px);
              /* opacity: .8; */
            }
            to{
              /*opacity: 1;*/
              filter: blur(0px);
            }

          }

      `}</style>
    </>
  )
}
