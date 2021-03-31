import React, { useState } from "react"
import { food } from "../../utils/menu"
import MenuItem from "./MenuItem"

const Menu = () => {
  const [index, setIndex] = useState<number>(0)
  // const component = [< Comidas />, <Bebidas />]
  return (
    <>
      <section className='menu '>
        <div className="menu__container">
          <div className='menu__item'>
            {/* {component[index]}      */}
            {
              index == 0 ? <>
                <MenuItem food={food} title='Desayunos/Cenas' />
                <MenuItem food={food} title='Almuerzos' />
              </>:
                <MenuItem food={food} title='Almuerzos' />
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
        }
        .menu__item{
          margin: 1rem;
          column-count: 2;
          column-gap: 3rem;
          column-rule-color: black; 
          column-rule-style: dotted;
          column-rule-width: 2px;
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