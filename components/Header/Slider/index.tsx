
import { memo } from "react";
import useSlider from "../../../hooks/useCarrousel";

const Slider = ({ imgs, interval }: { imgs: string[], interval: number }) => {

  const i = useSlider(imgs.length, interval)

  return (<>
    <div className='slide'>
      {imgs.map((img, aux) =>
      (
        <img
          src={img}
         
          alt={img}
          key={aux}
          className={i == aux ? 'show' : 'none'}
        />
      )
      )}
    </div>
    <style jsx>{`
      .slide {
        background: linear-gradient(to right,rgba(68, 61, 61,.4),rgba(199, 96, 96, 0.4)); 
        position: absolute;
        height: 100%;
        width: 100%;
      }  
      img{
        position: relative;
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-position: center;
        z-index: -1;
        will-change: opacity;
      }
      .none{
        display: none;
        will-change: opacity;
      }
      .show{
        display: initial;
        animation: fadeIn .8s ease-in;
      }
      @keyframes fadeIn {
        from{ 
          /* filter: blur(5px); */
          opacity: .6; 
        }
        to{
          opacity: 1;
           /*filter: blur(0px);*/
        }
      }
    `}</style>
  </>)
}
export default memo(Slider)



