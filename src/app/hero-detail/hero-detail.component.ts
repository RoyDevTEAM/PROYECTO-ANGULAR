import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts'
import { HeroService } from '../hero.service'; // Importa el servicio HeroService

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined; // Declara una propiedad de entrada 'hero' de tipo Hero o undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero(); // Carga el héroe al inicializar el componente
  }

  getHero(): void {
    const idStr = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del héroe desde la URL
    if (idStr) {
      const id = +idStr; // Convierte el ID a número solo si idStr no es null
      this.heroService.getHero(id).subscribe((hero) => {
        this.hero = hero; // Asigna el héroe obtenido desde el servicio
      });
    } else {
      // Si no existe el parámetro 'id', maneja el error o redirige
      console.error('ID no encontrado en la URL');
    }
  }

  goBack(): void {
    this.location.back(); // Navega hacia atrás en la historia del navegador
  }
}
