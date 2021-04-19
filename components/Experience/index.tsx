import Image from "next/image"
 import { BsPersonCheck } from "react-icons/bs"
 
const Experience = () => {
  return (
    <>
      <section  className='experience' >
        <h2 className='subtitle pink cursiva'>Tu experiencia</h2>
        <div className="card">
          <ul className='experience__list'>
            <li className='experience__list__item' >
              <img className='icon' src="/planta.png" alt="plantita" />
              <div className="content">
                <h4>Naturaleza</h4>
                <p>
                  Disfruta de un ambiente rodeado con variedad de captus y hermosas flores.
                </p>
              </div>
            </li>
            <li className='experience__list__item'>
              <div className="icon">
                <BsPersonCheck />
              </div>
              <div className="content">
                <h4>Atención al cliente</h4>
                <p>Le brindaremos una exelente atención para que te sientas como en casa.</p>
              </div>
            </li>
            <li className='experience__list__item'>
              <img className='icon' src='/cafe.png' />
              <div className="content">
                <h4>Comida para todos los gustos</h4>
                <p>
                  Disfruta de una gran variedad de platillos, postres y bebidas.<br />
                  Cada semana añadimos más platillos.
                </p>
              </div>
            </li>
          </ul>
          <div className='img'>
            <Image
              src='/personal9.webp'
              layout='intrinsic'
              objectFit='cover'
              objectPosition='center'
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <style jsx>{`
      section {
        height: 110vh;
     
        background: var(--grey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      .title{
        color: var(--pink-ligth);
        font-size: 50px;
        margin-top: 2rem;
      }
      .card{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        margin: 0 10%;
      }

      .experience__list{
        list-style: none;
        min-width: 50%;
        margin-right: 1rem;

      }
      
      .experience__list__item{
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 10px #ccc;
        margin-top: 1rem;
        border-radius: 10px;
        padding-left:  .7rem;
        background-color: var(--white);
      }
      
      .icon{
        width: 80px;
        height: 80px;
        font-size: 80px;
        color: var(--cafe);
      }
      .content{
        margin: 0 4%;
      }
    
      img{
        width: content;
        object-fit: contain;
        object-position: center;
        height: 60%;
        margin-top: 1rem;
      }
      @media(max-width:768px){
        section{
          height: auto;
        }
        .subtitle{
          margin-top: 2rem;
        }
        .experience__list{
          padding-left:0%; 
          margin: 0;
          margin-bottom: 1rem;
        }
        .card{
          flex-wrap: wrap;
          height: 90%;
          margin: 9%;
        }
       
        img{
          width: 90%;
          object-fit: contain;
          object-position: center;
          height: 50%;
          margin-top: 0rem;
        }
      }
      @media(max-width:425px){
        .title{
          margin-bottom:2rem; 
        }
        .experience__list__item{
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 1rem;
        }
        
        .experience__list__item h4 {
          text-align: center;
        }
        .experience__list{
          padding: 0;
        }
      }
    `}</style>
    </>
  )
}

export default Experience
