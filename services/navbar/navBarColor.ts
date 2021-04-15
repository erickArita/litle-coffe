import { createContext, useContext } from "react"
export type NavProperties = {
  transparent: boolean
  setTransparent: (c: boolean) => void
}
export const initState = {
  transparent: true,
  setTransparent: () => { },
}
const NavContext = createContext<NavProperties>(initState)
export const useNavContext = () => useContext(NavContext)
export default NavContext



