function About() {
  return (
    <>
      <section className='about'>
        <div className="grid">
          <div className="about__text">
            <h2 className='title'>Nosotros</h2>
            <p className='roboto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              </p>
          </div>
          <img
            className='img'
            src="/rest/frontal.jpg"
            alt="máquina de cafes"
          />
          <img

            className='img'
            src="/food/cafe_pan.jpg"
            alt='cafe con pan'
          />
          <div className="about__text" >
            <h2 className='title'>Nosotros</h2>
            <p className='roboto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
              Lorem ipsum dolor sit amet
              </p>
          </div>
          {/* <div>
            hola
            </div>
          <div className='row reverse'>
            <div className="about__text">
              <h2 className='title'>nosotros</h2>
              <p className='roboto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique natus eius, nostrum iure pariatur dolorem quo quaerat reiciendis facilis consectetur alias molestias dicta nulla recusandae illum commodi optio ut?
              </p>
            </div>
            <div className="about__image">
            </div>
          </div> */}

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
        @media (max-width:750px){
          .grid{
            height: 100%;
            grid-template-rows: repeat(3,33%);
            grid-template-columns:none;

          }
          .grid img:nth-child(3){
            display: none;
          }
          
        }
        .title{
          font-size: 50px;
          color: var(--orange-ligth)
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
