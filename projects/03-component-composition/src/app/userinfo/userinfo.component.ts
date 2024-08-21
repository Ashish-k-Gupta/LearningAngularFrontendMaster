import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      userinfo works! <br>
     <strong> Ashish We have made this work</strong>
    </p>
  `,
  styles: ``
})
export class UserinfoComponent {

}
