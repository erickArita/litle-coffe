const Location = () => {
  return (
    <>
      <section id='location' className='location h100'>

        <div className='container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20718.971359674906!2d-89.10655888687482!3d14.86923192294102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63dd958b02d653%3A0xd5b7ffa346c4c598!2sThe%20Little%20Coffee!5e0!3m2!1sen!2shn!4v1618933158853!5m2!1sen!2shn" className='container__map mt' style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          <div className='container__text'>
            <h2 className='subtitle2 pink mt'>Ubicación</h2>
            <p className='roboto'>
              Estamos ubicados en la calle del comercio, media cuadra atras de la Iglesia Católica.
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .location{
          height: auto;
          display: flex;
          background: var(--white);
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
      
        .container{
          display: flex;
          justify-content:center;
          align-items: center;
          width: 100%;
          background-color: var(--white);
        }
        .container__text{
          width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          padding: 1rem;
          box-sizing: border-box;
          color: var(--dark);
          text-align: center;
        }
        .container__text p{
          font-size: 18px;
        }
        .container__map{
          width: 80%;
          height: 500px;
          margin: 2rem;
        }
        @media (max-width:768px){
          .container__map{
            width: 100%;
            
          }
        }
        @media (max-width: 768px) {
          .container{
            flex-direction: column-reverse;
          }
        }
      `}</style>


    </>
  )
}

export default Location
