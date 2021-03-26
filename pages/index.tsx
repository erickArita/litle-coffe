import { NextPageContext } from 'next'
import { Parallax } from 'react-parallax'
// import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
// import Location from '../components/Location'
import Specialities from '../components/Specialities'

export type Client = { isMovile: string }
function IndexPage({ isMovile }: Client) {
  return (
    <>
      <Header isMovile={isMovile} />
      <Experience />

      <Parallax
        blur={{ min: 20, max: -31 }}
        bgImage={'/food/makeCoffe.jpg'}
        bgImageAlt="maquina de cafe"
        bgImageStyle={{
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        strength={100}
      >
        <div className='separator' style={{ height: '70vh' }} >
          <h4 className='subtitle white'>Especiales</h4>
        </div>
      </Parallax>
      <Specialities />
      <style jsx>{`
        .separator{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media(max-width:425px){
          .separator{
            height: 30vh!important;
          }
        }
    `}</style>
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
