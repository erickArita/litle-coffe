import useSlider from "../../../hooks/useCarrousel";

export const Slider = ({ imgs, interval }: { imgs: string[], interval: number }) => {
  const i = useSlider(imgs.length, interval)

  return (<>
    <div className='slide'>
      {imgs.map((img, aux) =>
        i == aux && (
          <img
            src={img}
            loading='lazy'
            alt={img}
            key={aux}
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
        animation: fadeIn .9s ease-in;
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-position: center;
        z-index: -1;
      }
      @keyframes fadeIn {
        from{ 
          /* filter: blur(5px); */
          opacity: .9; 
        }
        to{
          opacity: 1;
           /*filter: blur(0px);*/
        }
      }
    `}</style>
  </>)
}




