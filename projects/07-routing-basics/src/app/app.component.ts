import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink],
  template: ` 
  <h1>Enable routing to see the greeting below</h1>
  <button (click)="navigateTo('/greeting')">Greeting</button>

  <button (click)="navigateTo('/welcome')">Welcome</button>

<!-- Below is for dynamic routing -->

  @for (product of dynamicComponent; track product){
   <ul>
     <li><a routerLink=" ['dynamic', $index]">{{product}} | {{$index}}</a></li>
     <!-- <li><a>{{}}</a></li>
     <li><a>{{}}</a></li> -->
  </ul>
  }

  <router-outlet/>
`,
  styles: [
    `
    ul{
      list-style: none;
    }
    `
  ],

})
export class AppComponent {
  title = '07-routing-basics';

  constructor(private router: Router) {}
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  dynamicComponent = ['Car 1', 'Car 2', 'Car 3'];

}