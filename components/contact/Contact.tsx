import { FormEvent, useState, } from "react"
const Contact = () => {

  const [mesage, setMesage] = useState(['', false])
  const [validating, setValidating] = useState(false)
  const [text, error] = mesage

  const temporalMesage = (message: string, error: boolean = true) => {
    setMesage([message, error])
    let id
    clearTimeout(id)
    id = setTimeout(() => {
      setMesage(['', error])
    }, 5000);
  }
  const validForm = (form: FormData) => {
    if (form.get('nombre') == '' || form.get('mensaje') == '' || form.get('correo') == '') {
      return false
    } else {
      return true
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidating(true)
    // @ts-ignore
    const form = new FormData(e.currentTarget)
    if (!validForm(form)) {
      return temporalMesage('Llene todos los campos'), setValidating(false)
    }
    // @ts-ignore
    sendData(form) && e.target.reset();
    setValidating(false)
  }

  const sendData = async (form: FormData): Promise<boolean> => {
    const response = await fetch('https://formspree.io/f/mqkwaynb', {
      method: 'POST',
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      temporalMesage('Mensaje enviado correctamente', false)
      return true
    } else {
      temporalMesage('Hubo un error al enviar, intentelo mas tarde')
      return false
    }
  }

  return (
    <>
      <section id='contacto' className="contacto h100">
        <h2 className='subtitle2'>Contáctanos</h2>
        <form className='mt' onSubmit={handleSubmit} >
          <label htmlFor="nombre">Nombre</label>
          <input autoComplete='off' type="text" name='nombre' />

          <label htmlFor="correo">Correo Electrónico</label>
          <input autoComplete='off' name='correo' type="email" />

          <label htmlFor="textArea">Mensaje</label>
          <textarea name="mensaje" cols={30} rows={10}  ></textarea>

          <button type='submit' className='button' disabled={validating}>Enviar</button>
          <p className={`${error ? 'error' : 'ok'}`}>{text}</p>
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
        button:disabled{
          background-color: #ccc;
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
