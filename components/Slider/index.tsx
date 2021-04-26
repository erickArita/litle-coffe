
import Image from "next/image";
import { memo } from "react";
import useSlider from "../../hooks/useCarrousel";
const Slider = ({ imgs, interval }: { imgs: string[], interval: number }) => {

  const i = useSlider(imgs.length, interval)

  return (<>
    <div className='slide'>
      <div id='pantalla' />
      {imgs.map((img, aux) =>
      (
        <div className={`img ${i == aux ? 'show' : 'none'}`}
          key={aux}
        >
          <Image
            loading='eager'
            src={img}
            alt={img}
            layout='fill'
            objectFit='cover'

          />
        </div>
      )
      )}
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
  </>)
}
export default memo(Slider)



