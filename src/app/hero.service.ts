import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Crea un Observable de héroes a partir del arreglo HEROES
    this.messageService.add('HeroService: fetched heroes'); // Agrega un mensaje al servicio MessageService
    return heroes; // Devuelve el Observable de héroes
  }

  
  getHero(id: number): Observable<Hero | undefined> {
    const heroes = this.getHeroesSync();
    const hero = heroes.find((hero) => hero.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private getHeroesSync(): Hero[] {
    const storedHeroes = localStorage.getItem('heroes');
    return storedHeroes ? JSON.parse(storedHeroes) : [];
  }

  saveHero(hero: Hero): void {
    const heroes = this.getHeroesSync();
    heroes.push(hero);
    localStorage.setItem('heroes', JSON.stringify(heroes));
    this.messageService.add('HeroService: saved new hero');
  }
}
