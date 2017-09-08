import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

    // Registration
    // if (this.canRegister) {
    //   return this.usersService.registerUser(user)
    //     .subscribe(() => {
    //       this.router.navigate(['/login']);
    //     },
    //     (error) => {
    //       // fix here
    //       this.errorMessage = 'Username is already is use!';
    //     });
    // }
  // }
