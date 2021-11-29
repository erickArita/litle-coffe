import { Parallax } from "react-parallax";
import { useIsMobile } from "../../hooks/useIsMovile";

const Separator = ({
  img,
  title,
  height = 700,
  id,
}: {
  img: string;
  title: string;
  height?: number;
  id: string;
}) => {
  const isMovile = useIsMobile();
  return (
    <>
      <Parallax
        blur={{ min: -10, max: 11 }}
        bgImage={img}
        bgImageAlt="maquina de cafe"
        bgImageStyle={{
          height: isMovile ? 300 : height,
          objectFit: "cover",
          objectPosition: isMovile ? "bottom" : "bottom",
        }}
        strength={100}
      >
        <div
          className="separator"
          id={id}
          style={{ height: "25rem", width: "100vw" }}
        >
          <h4 className="subtitle white">{title}</h4>
        </div>
      </Parallax>
      <style jsx>{`
        .separator {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 425px) {
          .separator {
            height: 30vh !important;
          }
        }
      `}</style>
    </>
  );
};

export default Separator;
