import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService{
  private heroesUrl = 'api/v1/heros';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
      return this.http.get(this.heroesUrl).toPromise()
         .then(response => {
           return response.json() as Hero[]})
         .catch(this.handleError);
  } 

  getHeroesSlowly(): Promise<Hero[]> {
    return this.getHeroes();
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}