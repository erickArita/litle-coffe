const Location = () => {
  return (
    <>
      <section className='location h100'>
        <h2 className='subtitle pink mt'>Ubicación</h2>
      </section>
      <style jsx>{`
        .location{
          display: flex;
          background-color: linear-gradient(to right,rgba(68, 61, 61,.4),
        rgba(199, 96, 96, 0.4));
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default Location
