import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    private loading = true;

    constructor(private heroService: HeroService,
        private router: Router) {}

    ngOnInit(): void {
        this.loading = true;
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4)).then(() => this.loading = false);
    }

    onSelect(hero: Hero): void {
        this.router.navigate(['/heroes', hero.id])
      }
 }

