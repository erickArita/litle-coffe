import Image from "next/image"

function About() {
  return (
    <>
      <section className='about mt'>
        <div className="grid">
          <div className="about__text">
            <h2 className='subtitle'>Nosotros</h2>
            <p className='roboto'>
              Somos un restaurante nacido durante la pandemia en Santa Rita Copán, rodeado de todo tipo de flores .
              </p>
          </div>
          <Image
            className='img'
            src="/rest/frontal.jpg"
            alt="máquina de cafes"
            width={700}
            height={200}
            objectFit='cover'
            layout='responsive'
          />
          <Image
            className='img item-c'
            src="/personaln.jpg"
            alt='cafe con pan' width={200}
            height={300}
            layout='responsive'
          />
          <div className="about__text  item-d" >
            <p className='roboto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              </p>
          </div>

        </div>
      </section>
      <style jsx>{`
        .about{
          background-color:var(--grey); 
          height: 100vh;
          display: flex;
          align-items: center;
        }
        .grid{
          background-color:var(--white); 
          display: grid;
          grid-template-rows: repeat(2,minmax(250px,1fr));
          grid-template-columns: minmax(100px,300px) minmax(100px,700px);
          margin: 0 auto;
          height: 90%;
          width: auto;
          box-shadow: 0px 0px 20px 2px #5f7184;
        }
        .mt{
          margin-top: 4rem;
        }
          .item-c {
          }
          .item-d {
          }
        @media (max-width:500px){
          .about{
            height: 120vh;
            
          }
          .grid{
            height: 110%;
            grid-template-rows: repeat(4,25%);
            grid-template-columns: none;
            padding: 2rem;
          }
          .item-c {
            grid-row: 3 / 4;
            
          }
          .item-d {
            grid-row: 3 / 4;
          }
        }
        .title{
          font-size: 50px;
          color: var(--orange-ligth);
        }
        .about__text{
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 0 1rem;
        }
        .about__text p{
          font-size: 18px;
        }
        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
         
        }
       
        .about__image{

        }
      `}</style>
    </>
  )
}

export default About
