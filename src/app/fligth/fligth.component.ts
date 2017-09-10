import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-fligth',
  templateUrl: './fligth.component.html',
  styleUrls: ['./fligth.component.css']
})


export class FligthComponent implements OnInit {
email: string;
constructor(private AuthService: AuthService, private Router: Router) { }

ngOnInit() {

}

registerUser(form: NgForm) {
  this.email = form.value.email;
  const password = form.value.password;
  this.AuthService.createUserWithEmailAndPassword(this.email, password).catch((error: any) => {
    if (error) {
      console.log(error);
    } else {
      this.Router.navigate(['/']);
    }
  });
  }
}
