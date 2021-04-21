import { FormEvent, useState, } from "react"
const Contact = () => {

  const [mesage, setMesage] = useState(['', false])
  const [text, error] = mesage
  const resetMesage = () => {
    setTimeout(() => {
      setMesage(['', false])
    }, 5000);
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // @ts-ignore
    const form = new FormData(e.currentTarget);
    const response = await fetch('https://formspree.io/f/mqkwaynb', {
      body: form,
      headers: {
        'Accept': 'application/json'
      },
      method: 'POST'
    })

    if (response.ok) {
      setMesage(['Mensaje enviado correctamente', true])
      resetMesage()
    } else {
      setMesage(['Hubo un error al enviar, intentelo mas tarde', false])
      resetMesage()
    }
  }
  return (
    <>
      <section className="contacto h100">
        <h2 className='subtitle2'>Contáctanos</h2>
        <form className='mt' onSubmit={handleSubmit} >
          <label htmlFor="nombre">Nombre</label>
          <input autoComplete='off' type="text" name='nombre' />

          <label htmlFor="correo">Correo Electrónico</label>
          <input autoComplete='off' name='correo' type="email" />

          <label htmlFor="textArea">Mensaje</label>
          <textarea name="mensje" cols={30} rows={10}  ></textarea>

          <button type='submit' className='button'>Enviar</button>
          <p className={`${error ? 'ok' : 'error'}`}>{text}</p>
        </form>
      </section>
      <style jsx>{`
        .contacto{
          background-color: #f7fafc;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }          
        form  {
          width: 450px;
          display: flex;
          box-shadow: 0px 0px 20px 2px #d7dbe0;
          flex-direction: column;
          padding: 3rem;
          background-color: var(--white);
          justify-content: space-around;
          min-height: 550px;
          box-sizing: border-box;
        }
        input{
          height: .7rem;
          border-radius: 5px;
          outline: none;
          border:  solid 1px #ccc;
          padding: 1rem;
        }
        input:focus{
          border:  solid 1px var(--orange-ligth);
        }
        textarea{
          resize: none;
          border:  solid 1px #ccc;
          padding: 1rem;
        }
        textarea:focus{
          outline: none;
          border:  solid 1px var(--orange-ligth);
        }
        label{
          font-size: 16px;
          font-weight: bold;
        }

        button{
          color: var(--white);
          background-color: var(--dark);
        }
        .ok,.error{
          text-align: center;
        }
        .ok{
          color: green;
        }
        .error{
          color: darkred;
        }
        @media(max-width:425px){
          form{
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
