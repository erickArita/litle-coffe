import { specialCard } from "../../utils/specials"
import SpecialCard from "./card"

const Specials = () => {
  return (
    <>
      <section className='specials '>
        <div className="container">
          <SpecialCard card={specialCard}  />
        </div>
      </section>
      <style jsx>{`
          .specials{
            min-height: 80vh;
            background-color: var(--grey);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container{
           display: grid;
           grid-template-rows: repeat(2,200px);
           grid-template-columns: repeat(2,400px);
              box-shadow: -1px 1px 20px 2px #ccc;
          }
        
          @media(max-width:799px) {
            .specials {
              height: auto;
              margin: 0 auto;
            }
            .container {
              grid-template-rows: repeat(4,minmax(150px,1fr));
              grid-template-columns: repeat(1,minmax(150px,1fr));
              grid-gap: 1rem;
              padding: 1rem 0;
            }
            
          }
          
      `}</style>
    </>
  )
}

export default Specials
