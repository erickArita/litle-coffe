
import Image from 'next/image'
import { SpecialCard } from '../../../utils/specials'
const CardSpecial = ({ card }: { card: SpecialCard[] }) => {
  return (
    <>
      {
        card.map(({ img, price, text, title }, i) =>
          <div className='specials__card' key={i}  >
            <div className="card__text">
              <h4>{title}</h4>
              <p>{text}</p>
              <p className="price">${price}</p>
            </div>
            <div className="card__img">
              <Image
                layout='fixed'
                width='200px'
                height='200px'
                src={img}
              />
            </div>
          </div >
        )
      }
      <style jsx>{`
          .specials__card{
            display: flex;
            flex-wrap: wrap;
            width: auto;
          }
          .specials__card:nth-child(3),
          :nth-child(4){
            flex-direction: row-reverse;
          }
          .card__text{
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: space-around;
            padding: .7rem .5rem;
            background-color: var(--white);
            max-width: 200px;
            max-height:200px;
            box-sizing: border-box;
            text-align: center;
          }
          .card__text h4{
            font-size: 20px;
            margin: 1rem;
          }
          .card__text p{
            color: #acacac;
          }
          .price{
            font-size: 15px;
            color:var(--cafe) !important;
            font-weight: 900;
          }
          .card__img img{
            width: 50%;
          }
          .card__img img{
            object-fit: contain;
            width: 200px;
            height: 200px;
          }

          @media(max-width:799px) {
            .specials__card{
              flex-direction: unset;
            }
            .specials__card:nth-child(2n+1){
              flex-direction: row-reverse;
            }
            .specials__card{
              display: flex;
              
            }
            .card__img img {
              object-fit: contain;
              max-height: 200px;
              max-width: 200px;
              min-width: 150px;
              min-height: 150px;
            }
          }
          @media(max-width:425px) {
          
          .specials__card{
            display: flex;
          }
          .card__img img {
            object-fit: contain;
          }
          .card__text{
            justify-content: space-around;
            padding: .7rem 0rem;
            background-color: var(--white);
            max-width: 50%;
            height:200px;
            box-sizing: border-box;
          }
          .card__img img {
            object-fit: cover;
            width: 50vw;
            height: 200px;
          }
        }
      `}</style>
    </>
  )
}

export default CardSpecial
