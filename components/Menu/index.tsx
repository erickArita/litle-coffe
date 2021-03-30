import React, { useState } from "react"


const Bebidas = () =>
  <>
    <ul>
      <li>hola</li>
      <li>hola2</li>
      <li>hola2</li>
    </ul>
  </>

const Comidas = () =>
  <>
    <ul>
      <li>hola</li>
      <li>hola</li>
      <li>hola</li>
    </ul>
  </>


const Menu = () => {
  const [index, setIndex] = useState<number>(0)
  const component = [< Comidas />, <Bebidas />]
  return (
    <>
      <section className='h100 menu'>
        <div className="menu__container">
          <div className='menu__item'>
            {component[index]}
          </div>
          <div className='buttons'>
            <button onClick={() => setIndex(0)}>Comidas</button>
            <button onClick={() => setIndex(1)}>Bebidas</button>
          </div>
        </div>
      </section>
      <style jsx>{`
        .menu{
          background-color: var(--grey);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .menu__container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          
          background-color: var(--white);
          height: 80%;
          width: 80%;
        }
        .menu__item{
          align-self: center;
          justify-self: center;
          width: 10%;
        }
        .buttons {
          align-self: center;
          justify-self: flex-end;
        }
      `}</style>
    </>
  )
}

export default Menu