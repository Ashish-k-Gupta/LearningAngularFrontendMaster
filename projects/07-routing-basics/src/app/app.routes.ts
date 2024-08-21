import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';
import { WelcomeComponent } from './welcome.component';

export const routes: Routes = [
  {
    // add a default path to greetings component
    path: '', 
    component: GreetingsComponent,

  },
{
  path: 'welcome',
  component: WelcomeComponent
}

];

