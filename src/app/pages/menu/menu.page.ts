import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {
  currentUser: any;

  constructor(private router: Router) {
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      this.currentUser = JSON.parse(userString);
    }
  }

  SalirApp(){
    this.router.navigate(['/login']);

  }
}
