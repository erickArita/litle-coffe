import { NextPageContext } from 'next'
// import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Separator from '../components/Separator'
// import Location from '../components/Location'
import Specials from '../components/Specialities'

export type Client = { isMovile: boolean }

function IndexPage({ isMovile }: Client) {
  const mobile = isMovile ? 'Mobile' : ''
  return (
    <>
      <Header isMovile={isMovile} />
      <Experience />
      <Separator isMovile={isMovile} title='Especiales' img={`/makeCoffe${mobile}.webp`} />
      <Specials />
      <Separator isMovile={isMovile} height={800} title='Menu' img={`/camarera${mobile}.webp`} />
      <Menu />
    </>
  )
}

IndexPage.getInitialProps = async ({ req }: NextPageContext) => {
  const typeOfClient = req ? req.headers['user-agent'] : navigator.userAgent
  let isMovile = typeOfClient?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
  return { isMovile: Boolean(isMovile) }
}
export default IndexPage
