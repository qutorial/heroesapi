import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: "hero-detail",
  template: `
  <div *ngIf="hero" class="container mt-5">
    <h2>{{hero.name}} details!</h2>
    <form>
    <div class="form-group">
        <label>id: </label>{{hero.id}}
    </div>
        <div class="form-group">
            <div *ngIf="hero.name=='Windstorm'" class="alert-success alert">Nice</div>
            <label for="heroName">name: </label>
            <input id="heroName" name="heroName" [(ngModel)]="hero.name" placeholder="name" class="form-control">
        </div>
        
    </form>    
    <button type="button" class="btn btn-primary" (click)="save()">Save</button>
    <button type="button" class="btn" (click)="goBack()">Back</button>
  </div>
  `
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.heroService.getHero(
              +params.get('id')
          )).subscribe(hero => this.hero = hero)

    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
          .then(() => this.goBack());
      }
}