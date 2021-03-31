export interface Food{
  food:string;
  price:string;
  description:string;
}
export const desayuno:Food[] = [
  {description:'Huevo batico con jamon, queso, chile, cilantro y cebolla', food: 'Omelet', price: '50.00' },
  {description:'Frijoles fritos, huevo al gusto, queso, aguacate, embutido(jamon o chorizo), 3 tortillas', food: 'Desayuno econónico', price: '60.00' },
  {description:'Frijoles fritos, huevo al gusto, queso, aguacate, mantequilla y 3 tortillas', food: 'Desayuno ded la casa', price: '65.00' },
  {description:'Carne(res, cerdo, pollo o chuleta), frijoles fritos, huevos al gusto, queso, aguacate y 3 tortillas', food: 'Desayuno de campo', price: '85.00' },
  {description:'fritas o al comal', food: 'Tortilla con quesillo (2)', price: '35.00' },
  {description:'con queso craft, quesillo y jamon', food: 'Tortillas sincronizadas (2)', price: '40.00' },
  {description:'Frijole, queso, mantequilla', food: 'Baleada sencillas', price: '15.00' },
  {description:'Frijoles fritos, mantequilla, huevo, queso y chorizo', food: 'super baleada', price: '20.00' },
  {description:'Frijoles fritos, pollo o cerdo, huevo, aguacate, matequilla y queso', food: 'Mega baleada', price: '25.00' },
  {description:'Res,cerdo,chorizo,pollo', food: 'Tostadas', price: '45.00' },
  {description:'', food: 'Gringas', price: '50.00' },
  {description:'Pollo o res o lomo de cerdo o chuleta,frijoles, aguacate, queso, chimol y 2 tortillas', food: 'Plato Típico económico', price: '80.00' },
]
export const almuerzos:Food[]=[
  {description:'Pollo o res o lomo de cerdo o chuleta,frijoles, aguacate, queso, chimol y 2 tortillas', food: 'Filete de pollo', price: '120.00' },
  {description:'Pollo o res o lomo de cerdo o chuleta,frijoles, aguacate, queso, chimol y 2 tortillas', food: 'Filete de res', price: '140.00' },
  {description:'', food: 'Churrasco + Filete de pollo', price: '170.00' },
  {description:'', food: 'Churrasco + Filete de cerdo', price: '170.00' },
  {description:'', food: 'Churrasco + chorizo', price: '175.00' },
  {description:'Chile dulce, cebolla, tocino, con carne (res,cerdo o pollo),tortillas de arina o maiz, chismol, frijoles charros, mantequilla y salsa picante', food: 'Alambres', price: '100.00' },
  {description:'', food: 'Chuleta típica', price: '135.00' },
  {description:'', food: 'Chuleta doble', price: '195.00' },
  {description:'', food: 'Plato de chorizo', price: '145.00' },
  {description:'(chuleta + filete de polllo/lomo de cerdo)+ filete de pollo', food: 'Plato mixto', price: '175.00' },
  {description:'chilee dulce, cebolla, tomate acompañado de frijoles charros, crema, chismol y salsas picantes ', food: 'Fajita de pollo', price: '100.00' },
]