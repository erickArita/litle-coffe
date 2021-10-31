import { NextPageContext } from 'next'
import { useEffect } from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Separator from '../components/Separator'
import Specials from '../components/Specialities'
import useInView from '../hooks/useInView'
import { useNavContext } from '../services/navbar/navBarColor'

export type Client = { isMovile: boolean }

function IndexPage({ isMovile }: Client) {
  const { setTransparent } = useNavContext()
  const mobile = isMovile ? 'Mobile' : ''

  const [setNode, entry] = useInView({ threshold: 0.1, rootMargin: '10px 0px 0px 0px' })

  useEffect(() => {
    afterOfHeader(entry.isIntersecting)
  }, [entry])

  const afterOfHeader = (downOfHeader: boolean) => {
    downOfHeader ? setTransparent(false) : setTransparent(true)
  }

  return (
    <>
      <Header isMovile={isMovile} />
      <div ref={setNode} >
        <div id='experience'>
          <Experience />
        </div>
        <Separator id='speciales' isMovile={isMovile} title='Especiales' img={`/makeCoffe${mobile}.webp`} />
        <Specials />
        <Separator id='menu' isMovile={isMovile}  title='Menu' img={`/camarera${mobile}.webp`} />
        <Menu />
      </div>
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
