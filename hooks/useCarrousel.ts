import { useEffect, useState } from "react";

export const useCarrousel = (imgs:string[]) => {
  const [backImg, setBackImg] = useState(imgs[0])
  let i = 0;
  const images = () => {
    let length = imgs.length - 1
    i >= length ? i = 0 : i++
    setBackImg(imgs[i])
  }
  useEffect(() => {
    let id = setInterval(images, 3000)
    return () => clearInterval(id)
  }, [])

  return backImg
}