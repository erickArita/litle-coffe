
import Image from "next/image";
import { useSlider } from "../../hooks/useCarrousel";

const Slider = ({ isMovile }: { isMovile: boolean }) => {

  const imgs: string[] = isMovile ? ['/rest/mobile.webp', '/rest/mobile2.webp'] : ['/rest/restaurant.webp', '/rest/restaurant2.webp']
  const { currentImage } = useSlider(imgs, 10000)

  return (
    <>
      <div className='slide'>
        <div id='pantalla' />
        <div className={`img`}>
          <Image
            loading='eager'
            src={imgs[currentImage]}
            alt='Restaurante'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <style jsx>{`
      .slide {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      #pantalla{
        position: absolute;
        background: linear-gradient(to right,rgba(68, 61, 61,.4),rgba(199, 96, 96, 0.4)); 
        height: 100%;
        width: 100%;
        z-index: 1;
      }
     
      .none{
        display: none;
        will-change: opacity;
        animation: fadeOut 1s ease-in;
      }
      .show{
        display: initial;
        animation: fadeIn 1s ease-out;
      }
      @keyframes fadeOut {
        from{ 
          opacity: 1;
           filter: blur(0px);
        }
        to{
          filter: blur(5px); 
          opacity: .6; 
        }
      }
      @keyframes fadeIn {
        from{ 
          filter: blur(5px); 
          opacity: .6; 
        }
        to{
          opacity: 1;
           filter: blur(0px);
        }
      }
    `}</style>
    </>
  )
}
export default Slider



