import React, { useState } from "react"
import { FaBeer, FaUtensils } from "react-icons/fa"
import { desayuno } from "../../utils/menu"
import MenuItem from "./MenuItem"

const Menu = () => {
  const [index, setIndex] = useState<number>(0)
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
          <div className='menu__food'>
            <ul className='menu__food__buttoms'>
              <li>
                <button className={`button ${index == 0 && 'active'}`} onClick={() => setIndex(0)}>
                  <FaUtensils />
                  Comidas
                </button>
              </li>
              <li>
                <button className={`button ${index == 1 && 'active'}`} onClick={() => setIndex(1)}>
                  <FaBeer />
                  Bebidas
                </button>
              </li>
            </ul>
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
        .menu__food {
          position: sticky;
          bottom: 0;
          display: flex;
          justify-content: space-around;
          height: 4rem;
          background-color: var(--dark);
          width: 100%;
        }
        .menu__food__buttoms {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
          color: white;
          justify-content: space-around;
          width: 70%;
        }
        .menu__food__buttoms button {
          color: white;
          font-size: 15px;
        }
       
        .menu__food__buttoms button>:first-child {
          margin-right: .5rem;
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