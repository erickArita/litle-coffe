export interface SpecialCard {
  title: string,
  text: string,
  price: string,
  img: string
}
export const specialCard: SpecialCard[] = [
  {
    title: 'Tacos al pastor',
    text: 'Un delicioso trio de tacos que te harán agua la boca',
    img: '/food/food.jpg',
    price: '50.00',
  },
  {
    title: 'Desayuno',
    text: 'Preparado para alegrar tu día',
    img: '/food/header.jpg',
    price: '60.00',
  },
  {
    title: 'Nachos',
    text: 'Una explosion de sabor en tu boca',
    img: '/food/nachos.jpg',
    price: '60.00',
  },
  {
    title: 'Micheladas',
    text: 'Todos los jueves una bebida al 2x1 ven a disfrutar ',
    img: '/food/micheladas.jpg',
    price: '25.00',
  }
]