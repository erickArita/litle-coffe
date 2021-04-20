import { useEffect } from "react"
import About from "../../components/About"
import Contact from "../../components/contact/Contact"
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
      <Contact />
    </>
  )
}

export default AboutPage
