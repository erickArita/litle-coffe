import Header from '../components/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
function IndexPage() {
  return (
    <ParallaxProvider >
      <Header/>
    </ParallaxProvider>
  )
}

export default IndexPage
