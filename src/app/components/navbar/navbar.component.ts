import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = false;

  routes = [
    { path: '/',           label: 'Home'       },
    { path: '/about',      label: 'About'      },
    { path: '/skills',     label: 'Skills'     },
    { path: '/experience', label: 'Experience' },
    { path: '/education',  label: 'Education'  }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 10;
  }
}
