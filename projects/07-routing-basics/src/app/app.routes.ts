import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';
import { WelcomeComponent } from './welcome.component';

export const routes: Routes = [
  {
      path: 'greeting',
      component: GreetingsComponent
 
  },

  {
    path: 'welcome',
    component: WelcomeComponent
  }
];