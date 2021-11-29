import { useEffect } from "react";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Separator from "../components/Separator";
import Specials from "../components/Specialities";
import useInView from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMovile";
import { useNavContext } from "../services/navbar/navBarColor";

function IndexPage() {
  const { setTransparent } = useNavContext();
  const isMovile = useIsMobile();
  const mobile = isMovile ? "Mobile" : "";

  const [setNode, entry] = useInView({
    threshold: 0.1,
    rootMargin: "10px 0px 0px 0px",
  });

  useEffect(() => {
    const afterOfHeader = (downOfHeader: boolean) => {
      downOfHeader ? setTransparent(false) : setTransparent(true);
    };
    afterOfHeader(entry.isIntersecting);
  }, [entry, setTransparent]);

  return (
    <>
      <Header />
      <div ref={setNode}>
        <div id="experience">
          <Experience />
        </div>
        <Separator
          id="speciales"
          title="Especiales"
          img={`/makeCoffe${mobile}.webp`}
        />
        <Specials />
        <Separator id="menu" title="Menu" img={`/camarera${mobile}.webp`} />
        <Menu />
      </div>
    </>
  );
}

export default IndexPage;
