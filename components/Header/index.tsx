import { useEffect, useState } from "react"

export default function Header() {
  const imgs: string[] = ['/food/food.jpg', '/rest/restaurant.jpg']
  const [backImg, setBackImg] = useState(imgs[0])

  let i = 0;
  const changeImg = () => {
    let length = imgs.length - 1
    i >= length ? i = 0 : i++
    setBackImg(imgs[i])
  }
  useEffect(() => {
    let id = setInterval(changeImg, 15000)
    return () => clearInterval(id)
  }, [])
  return (
    <>
      <header className='header'>
        <div className="header__content">
          <h1 className='title'>the litle coffee</h1>
        </div>
      </header>
      <style jsx>{`
          header{
            height: 110vh;
            background: linear-gradient(to right,rgba(68, 61, 61,.2),#c760604b), url(${backImg});
            background-repeat: no-repeat;
            background-size:cover ;
            background-position: center center;
            background-origin: padding-box;
            animation: traslate 1.5s ease;
            background-attachment: fixed;
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
          }
          @keyframes traslate{
            from{ opacity: .8; }
            to{ opacity: 1; }
          }

      `}</style>
    </>
  )
}
