// Este archivo define un arreglo de héroes para el tutorial de "Heroes" en Angular (Capítulo 2)
import { Hero } from './hero'; // Importa la clase Hero desde el archivo 'hero.ts'

// Define una constante 'HEROES' que es un arreglo de objetos de tipo Hero
// Cada héroe tiene un ID, un nombre y una URL de imagen asociada
export const HEROES: Hero[] = [
  { id: 11, name: 'Lionel Messi', img: 'assets/img/messi.webp' },
  { id: 12, name: 'Xavi Hernandez', img: 'assets/img/xavi.webp' },
  { id: 13, name: 'Andres Iniesta', img: 'assets/images/iniesta.jpg' },
  { id: 14, name: 'Carles Puyol', img: 'assets/img/puyol.jpg' },
  { id: 15, name: 'Ronaldinho', img: 'assets/img/ronaldinho.jpg' },
  { id: 16, name: 'Gerard Pique', img: 'assets/images/pique.jpg' },
  { id: 17, name: 'Sergio Busquets', img: 'assets/images/busquets.jpg' },
  { id: 18, name: 'Luis Suarez', img: 'assets/images/suarez.jpg' },
  { id: 19, name: 'Neymar Jr.', img: 'assets/images/neymar.jpg' },
  { id: 20, name: 'Javier Mascherano', img: 'assets/images/mascherano.jpg' },
];