import React, { useState } from "react"
import { desayuno } from "../../utils/menu"
import MenuItem from "./MenuItem"

const Menu = () => {
  const [index, setIndex] = useState<number>(0)
  // const component = [< Comidas />, <Bebidas />]
  return (
    <>
      <section className='menu '>
        <div className="menu__container">
          <div className='menu__item'>
            {
              index == 0 ? <>
                <MenuItem food={desayuno} title='Desayunos/Cenas' />
                <MenuItem food={desayuno} title='Almuerzos' />
              </> :
                <MenuItem food={desayuno} title='Almuerzos' />
            }
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
          min-height: 100vh;
          height: auto;
        }
        .menu__container {
          display: flex;
          flex-direction: column;
          height: 80%;
          width: 100%;
        }
        .menu__item{
          margin:0 5%;
          column-count: 2;
          column-gap: 3rem;
          column-rule-color: black; 
          column-rule-style: dotted;
          column-rule-width: 2px;
          column-fill: 2px;
          width: auto;
        }
        .buttons {
          position: sticky;
          bottom: 20px;
          align-self: center;
          justify-self: flex-end;
        }
         
        @media(max-width:425px){
          .menu__item{
            column-count: 1;
          }
           
        }
       
      `}</style>
    </>
  )
}

export default Menu