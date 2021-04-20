import Image from "next/image"
import { useEffect } from "react"
import { use100vh } from "react-div-100vh"
import About from "../../components/About"
import Location from "../../components/Location"
import { useNavContext } from "../../services/navbar/navBarColor"

const AboutPage = () => {
  const height = use100vh()
  const { setTransparent } = useNavContext()

  useEffect(() => {
    setTransparent(false)
  }, [])
  return (
    <>
      {/* <section className='nosotros'>

        <Image src='/personaln.jpg'
          height={500}
          width={400}
          layout='intrinsic'
        />
        <div className='nosotros__text'>
          <h1 className='subtitle mt'>Nosotros</h1>
          <p className='roboto'>
            Somos un restaurante nacido durante la pandemia en Santa Rita Copán,
            rodeado de todo tipo de flores exoticas y todo tipo de exquisita comida.
          </p>
        </div>
      </section> */}
      <About/>
      <Location />
      <section >

      </section>
      <style jsx>{`
        .nosotros{
          min-height: ${height}px;
          display: flex;
          justify-content:center;
          align-items: center;
          margin:0  auto;
          background-color: var(--white);
        }
        .nosotros__text{
          width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          padding: 1rem;
          box-sizing: border-box;
          color: var(--dark);
        }
        .nosotros__text p{
          font-size: 18px;
        }
        
        @media (max-width: 768px) {
          .nosotros{
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </>
  )
}

export default AboutPage
