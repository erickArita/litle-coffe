import scrollPolify from 'animated-scroll-to'

const scrollTo = (identifier: string) => {
  //@ts-ignore
  const element = document.querySelector(identifier)
  element && scrollPolify(element, { cancelOnUserAction: false})
}
export default scrollTo