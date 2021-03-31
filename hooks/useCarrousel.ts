import { useEffect, useState } from "react";

const useSlider = (length: number, interval: number): number => {

  const [index, setIndex] = useState<number>(0)
 
  function nextS() {
    setIndex(index + 1)
  }
  function reset() {
    setIndex(0)
  }
  function change() {
    index >= length - 1 ? reset() : nextS()
  }

  // recuerda siempre pasarle como dependencia
  //  lo que uses en el useEfect
  useEffect(() => {
    let id = setInterval(change, interval)
    return () => clearInterval(id)
  }, [change])

  return index
}
export default useSlider