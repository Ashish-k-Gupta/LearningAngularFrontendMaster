import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol class=roman-list>
    <li >Hi</li>
    <li>Hello</li>
    <li>World</li>
    <li>Item There</li>
    </ol>
   
  `,
  styles: [`
    .roman-list {
      list-style-type: upper-roman;
    }
  `],
})
export class AppComponent {}
