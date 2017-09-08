
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    console.log('clicked');
    this.auth.logOut();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  click() {
    console.log('clicked');
  }

  loginUser() {
    return this.auth.currentUser().email;
  }

}
