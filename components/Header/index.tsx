import { Slider } from './Slider'
// no funciona la transicion de imagenes,
// tiene que haber un efecto de blur 
export default function Header() {
  const imgs: string[] = ['/rest/restaurant2.jpg', '/rest/restaurant.jpg']

  return (
    <>
      <header className='header'>
        <div className="header__content">
          <h1 className='title'>the litle coffee</h1>
          <Slider imgs={imgs} />
        </div>
      </header>
      <style jsx>{`
          header{
            height: 100vh;
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
         
      `}</style>
    </>
  )
}
