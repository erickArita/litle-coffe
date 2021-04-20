import { use100vh } from "react-div-100vh"
import Slider from "../../components/Slider"

const AboutPage = () => {
  const height = use100vh()


  return (
    <>
      <section className='nosotros'>
        <h1>Nosotros</h1>
      </section>
      <style jsx>{`
        .nosotros{
          min-height: ${height}px;

        }
      `}</style>
    </>
  )
}

export default AboutPage
