import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      const element = document.querySelector('.navBar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
        element.classList.remove('navbar-reverse');
      } else {
        element.classList.remove('navbar-inverse');
        element.classList.add('navbar-reverse');
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
