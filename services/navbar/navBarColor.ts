import { createContext, useContext } from "react"
export type NavProperties = {
  transparent: boolean
  setTransparent: (c: boolean) => void
}
export const initState = {
  transparent: true,
  setTransparent: () => { },
}
//se instancia en _app
const NavContext = createContext<NavProperties>(initState)
// lee lo valores que se le pasaron a NavContext se instancia en pages/index
export const useNavContext = () => useContext(NavContext)
export default NavContext



