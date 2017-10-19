import { Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { Component } from '@angular/core';

@Component({
  template: `
  <ul class="nav nav-tabs">
   <li class="navbar-brand mt-1">{{title}}</li>
   <li class="nav-item"><a class="nav-link" [class.active]="this.router.url === '/dashboard'" routerLink="/dashboard">Dashboard</a></li>
   <li class="nav-item"><a class="nav-link" [class.active]="this.router.url === '/heroes'" routerLink="/heroes">Heroes</a></li>
  </ul>

  <div class="container mt-6"></div>
  
  
  <div class="mt-5">
  
  <router-outlet></router-outlet>
  <span *ngIf="loading">Loading page...</span>
  </div>

  `,
  selector: 'my-app'
})
export class AppComponent {
    title = 'Tour of Heroes';

     // Sets initial value to true to show loading spinner on first load
    loading = true
  
    constructor(private router: Router) {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event)
      })
    }
  
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true
      }
      if (event instanceof NavigationEnd) {
        this.loading = false
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        // this.loading = false
      }
      if (event instanceof NavigationError) {
        // this.loading = false
      }
    }

}
