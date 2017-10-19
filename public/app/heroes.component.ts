import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .card.selected:hover{
    background-color: #BBD8DC !important;
    color: white;
  }
  .card:hover{
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  `],
  
  selector: 'my-heroes',
 
  template: `
<div class="mt-5" role="alert" *ngIf="loading">
  Loading heroes...
</div>
<div class="container" *ngIf="!loading">
    <div class="container">
      <div class="ui cards">
        <div class="card" *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
          <div class="content">
            <div class="header">{{hero.name}}</div>
            {{hero.id}}
          </div>
        </div>
      </div>
      <div class="mt-4" *ngIf="selectedHero">
        <h2>
          {{selectedHero.name | uppercase}} is my hero
        </h2>
        <button type="button" class="btn btn-primary" (click)="gotoDetail()">View Details</button>
      </div>
    </div>
</div>
    `,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  loading = true;

  constructor(private heroService: HeroService,
     private router: Router
  ){}
  
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => 
          this.heroes = heroes ).then(() => this.loading = false);
  }

  ngOnInit(): void {
    this.loading = true;
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['/heroes', this.selectedHero.id])
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;    
  }
}
