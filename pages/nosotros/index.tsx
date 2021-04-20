import { useEffect } from "react"
import About from "../../components/About"
import Location from "../../components/Location"
import { useNavContext } from "../../services/navbar/navBarColor"

const AboutPage = () => {
  const { setTransparent } = useNavContext()

  useEffect(() => {
    setTransparent(false)
  }, [])
  return (
    <>
      <About />
      <Location />
      <section className="contacto">

      </section>
    </>
  )
}

export default AboutPage
