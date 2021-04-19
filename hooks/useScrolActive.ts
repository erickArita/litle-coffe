import { useEffect } from "react";

const useScrollActive = (cb: Function) => {

  const onScroll = () => {
    cb()
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
export default useScrollActive