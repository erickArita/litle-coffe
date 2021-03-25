import { NextPageContext } from 'next'
// import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Location from '../components/Location'

export type Client = { isMovile: string }
function IndexPage({ isMovile }: Client) {
  return (
    <>
      <Header isMovile={isMovile} />
      <Experience />
      <Location />
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
