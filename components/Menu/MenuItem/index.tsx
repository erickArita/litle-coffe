import { Food } from '../../../utils/menu'
const MenuItem = ({ food, title }: { food: Food[], title: string }) => {
  return (
    <>
      <div className='title'>
        <h3 className=' cafe'>{title}</h3>
        <hr />
      </div>
      <ul className='menuList'>
        {
          food.map((e, i) =>
            <li key={i}>
              <h5 className='menuList__title pink'>{e.food}
                <span className='price'>..........${e.price}</span> </h5>
              {e.description.length > 1 && <p className='roboto'>{e.description}</p>}
            </li>
          )
        }
      </ul>
      <style jsx>{`
        .title {
          column-span: all;
          text-align: center;
          font-size: 30px;
          margin-top: 1rem;
          margin-bottom: 1rem;
         }

        .menuList {
           padding: 0;
          padding-left: 1rem;
          list-style-type: circle;
        }
        .menuList__title{
          text-decoration: dotted;
        }
        .p{
          margin: 0;
          margin-right: 1rem;
          color: #a59d9d !important;
          margin-left: .5rem;
        }
        .description p:first-child{
          color: var(--dark);
        }
        .price{
          color: var(--cafe);
          font-family: var(--cursiva);
          font-size: 20px;
        }
        .menuList__title{
          font-size: 18px;
          margin: 0;
          margin-bottom: 5px;
        }
       .p{}
       
    `}</style>
    </>
  )
}

export default MenuItem
