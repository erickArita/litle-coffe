const Location = () => {
  return (
    <>
      <section className='location h100'>
        <h2 className='subtitle2 pink mt'>Ubicación</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20718.971359674906!2d-89.10655888687482!3d14.86923192294102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63dd958b02d653%3A0xd5b7ffa346c4c598!2sThe%20Little%20Coffee!5e0!3m2!1sen!2shn!4v1618933158853!5m2!1sen!2shn" className='location__map mt' style={{border:0}} allowFullScreen loading="lazy"></iframe>
      </section>
      <style jsx>{`
        .location{
          display: flex;
          background: var(--white);
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .location__map{
          width: 50%;
          height: 500px;
        }
        @media (max-width:768px){
          .location__map{
            width: 100%;
            
          }
        }
      `}</style>
    </>
  )
}

export default Location
