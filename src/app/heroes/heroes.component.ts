import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit desde Angular Core
import { Hero } from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts'
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde 'hero.service.ts'

@Component({
  selector: 'app-heroes', // Define el selector HTML para este componente
  templateUrl: './heroes.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./heroes.component.scss'], // Especifica los estilos asociados a este componente
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Declara una propiedad 'heroes' como un arreglo de objetos Hero

  constructor(private heroService: HeroService) {} // Constructor que inyecta el servicio HeroService

  ngOnInit(): void {
    this.loadHeroesFromLocalStorage(); // Al iniciar el componente, intentamos cargar los héroes desde localStorage
  }

  // Método para cargar los héroes desde localStorage
  loadHeroesFromLocalStorage(): void {
    const storedHeroes = localStorage.getItem('heroes'); // Intenta obtener los héroes almacenados en localStorage
    if (storedHeroes) {
      this.heroes = JSON.parse(storedHeroes); // Si existen, los convierte de JSON a un arreglo de objetos Hero
    } else {
      // Si no hay héroes en localStorage, los cargamos desde el servicio
      this.loadHeroesFromService();
    }
  }

  // Método para cargar los héroes desde el servicio
  loadHeroesFromService(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes; // Asigna los héroes obtenidos desde el servicio
      this.saveHeroesToLocalStorage(); // Guarda los héroes en localStorage para futuras visitas
    });
  }

  // Método para eliminar un héroe (opcional)
  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h.id !== hero.id); // Filtra el héroe que se va a eliminar
    this.saveHeroesToLocalStorage(); // Guarda la lista actualizada de héroes en localStorage
  }

  // Método para guardar la lista de héroes en localStorage
  saveHeroesToLocalStorage(): void {
    localStorage.setItem('heroes', JSON.stringify(this.heroes)); // Guarda la lista de héroes actual en localStorage como JSON
  }
}
