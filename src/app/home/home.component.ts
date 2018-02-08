import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //loginValid: boolean;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    console.log("localstorage:"+localStorage);
  }
}
