import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="shell">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .shell { padding-top: 64px; min-height: 100vh; }
  `]
})
export class AppComponent {}
