import { Food } from '../../../utils/menu'
const MenuItem = ({ food, title }: { food: Food[], title: string }) => {
  return (
    <>
      <h3 className='title cafe'>{title}</h3>
      <ul className='menuList'>
        {
          food.map((e, i) =>
            <li key={i}>
              <h5 className='menuList__title pink'>{e.food}</h5>
              <div className="description">
                <p className='roboto'>{e.description}{' '}.....................
                <span className='price'>${e.price}</span></p>
              </div>
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
          list-style: none;
          padding: 0;
        }
        .description p{
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
        
       
    `}</style>
    </>
  )
}

export default MenuItem
