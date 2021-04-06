
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
                width={200}
                height={200}
                src={img}
                layout='responsive'
              />
            </div>
          </div >
        )
      }
      <style jsx>{`
          .specials__card{
            display: flex;
            
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
          .card__img {
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
          }
          @media(max-width:425px) {
          
            .specials__card{
              display: flex;
              flex-wrap: wrap;
              justify-content: center;

            }
            
            .card__text{
              justify-content: space-around;
              padding: auto 0rem;
              background-color: var(--white);
              max-width: 200px;
              height:200px;
              box-sizing: border-box;
            }
            .card__text h4{
              font-size: 20px;
              margin: .2rem;
            }
            .card__text p{
              margin: 0;
            }
          }
      `}</style>
    </>
  )
}

export default CardSpecial
