import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';
import { WelcomeComponent } from './welcome.component';
import { DynamicComponent} from './dynamicComponent';

export const routes: Routes = [
  {
      path: 'greeting',
      component: GreetingsComponent
 
  },

  {
    path: 'welcome',
    component: WelcomeComponent
  },
  
  {
    path: 'dynamic/:id',
    component: DynamicComponent
  },
  
];