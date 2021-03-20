import Image from "next/image";
import useSlider from "../../../hooks/useCarrousel";

export const Slider = ({ imgs }: { imgs: string[] }) => {
  const i = useSlider(imgs.length, 5000)

  return (<>
    { imgs.map((img, aux) =>
      i == aux && (
        <img
          className='slide'
          src={img}
          loading='eager'
          alt={img}
          key={aux}
        />
      )
    )}
    <style jsx>{`
      .slide {
        animation: fadeIn .5s ease-in;
        background: linear-gradient(to right,rgba(68, 61, 61,.2),#c760604b);
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-position: center;
        position: absolute;
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




