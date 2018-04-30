import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header class="app-header"></app-header>
    <app-gallery class="app-gallery"></app-gallery>
  `,
  styles: [`
    .app-header {
      height: 64px;
      flex: none;
      z-index: 999;
    }
    .app-instagram {
      flex: auto;
    }
  `]
})
export class AppComponent {
  constructor() {}

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log(event);
  }
}
