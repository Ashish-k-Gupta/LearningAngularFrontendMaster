import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: ` 
  <h1>Enable routing to see the greeting below</h1>
  <button (click)="navigateTo('/welcome')">Welcome</button>
  <button (click)="navigateTo('/greeting')">Greeting</button>
  <router-outlet/>
`,
  styles: [],
})
export class AppComponent {
  title = '07-routing-basics';

  constructor(private router: Router) {}
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}