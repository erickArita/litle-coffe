import { Parallax } from 'react-parallax'

const Separator = ({ isMovile, img, title }: { isMovile: boolean, img: string, title: string }) => {
  return (
    <>
      <Parallax
        blur={{ min: -10, max: 11 }}
        bgImage={img}
        bgImageAlt="maquina de cafe"
        bgImageStyle={{
          height: isMovile ? 300 : 700,
          objectFit: 'cover',
          objectPosition: isMovile ? 'bottom' : 'bottom'
        }}
        strength={100}
      >
        <div className='separator' style={{ height: '60vh' }} >
          <h4 className='subtitle white'>{title}</h4>
        </div>
      </Parallax>
      <style jsx>{`
        .separator{
           
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media(max-width:425px){
          .separator{
            height: 30vh !important;
          }
        }
    `}</style>
    </>
  )
}

export default Separator
