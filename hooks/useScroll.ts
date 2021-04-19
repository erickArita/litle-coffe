import scrollPolify from 'animated-scroll-to'

const useScroll = (identifier: string) => {
  //@ts-ignore
  const element = document.querySelector(identifier)
  element && scrollPolify(element, { cancelOnUserAction: false})
}
export default useScroll