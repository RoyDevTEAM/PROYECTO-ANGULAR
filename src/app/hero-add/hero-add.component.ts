import { Component } from '@angular/core';
import { Hero } from '../hero'; // Importa la clase Hero para usarla como modelo
import { Router } from '@angular/router'; // Importa el servicio Router para la redirección de páginas

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',  // Archivo de plantilla HTML del componente
  styleUrls: ['./hero-add.component.css'],  // Archivo de estilo CSS del componente
})
export class HeroAddComponent {
  hero: Hero = { id: 0, name: '', img: '' }; // Inicializa el modelo para un nuevo héroe

  constructor(private router: Router) {
    this.loadHeroes(); // Carga los héroes desde localStorage cuando se inicializa el componente
  }

  // Método para agregar un nuevo héroe
  addHero(): void {
    // Verifica si los campos 'name' o 'img' están vacíos
    if (!this.hero.name.trim() || !this.hero.img.trim()) {
      alert('Please complete all fields.'); // Muestra una alerta si falta algún campo
      return;
    }

    this.hero.id = this.getNextId(); // Asigna un ID único al nuevo héroe
    this.saveHero(this.hero); // Guarda el nuevo héroe en localStorage

    alert('Hero added successfully!'); // Muestra un mensaje de éxito

    // Resetea el formulario después de agregar el héroe
    this.hero = { id: 0, name: '', img: '' };

    // Redirige a la página de lista de héroes
    this.router.navigate(['/heroes']);
  }

  // Método para obtener el siguiente ID disponible para un nuevo héroe
  getNextId(): number {
    const heroes = this.loadHeroes(); // Carga los héroes almacenados
    // Si hay héroes, el siguiente ID será el último + 1, si no, comenzamos desde 1
    return heroes.length > 0 ? heroes[heroes.length - 1].id + 1 : 1;
  }

  // Método para guardar un héroe en localStorage
  saveHero(hero: Hero): void {
    const heroes = this.loadHeroes(); // Carga los héroes existentes
    heroes.push(hero); // Agrega el nuevo héroe al arreglo
    localStorage.setItem('heroes', JSON.stringify(heroes)); // Guarda la lista actualizada de héroes en localStorage
  }

  // Método para cargar los héroes desde localStorage
  loadHeroes(): Hero[] {
    const storedHeroes = localStorage.getItem('heroes'); // Obtiene los héroes almacenados
    return storedHeroes ? JSON.parse(storedHeroes) : []; // Devuelve los héroes deserializados o un arreglo vacío si no hay datos
  }

  // Método para manejar la selección de archivo de imagen y convertirla a base64
  onFileChange(event: any): void {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      const reader = new FileReader();  // Crea un objeto FileReader para leer el archivo
      reader.onload = () => {
        this.hero.img = reader.result as string; // Almacena la imagen en formato base64
      };
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos (base64)
    }
  }
}
