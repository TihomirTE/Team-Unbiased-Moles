import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  email: string;
  constructor(private AuthService: AuthService, private router: Router,
     private toastr: ToastsManager, private viewContRef: ViewContainerRef) {
      this.viewContRef = viewContRef;
      this.toastr.setRootViewContainerRef(viewContRef);
      }


  ngOnInit() {
  }

  loginUser(form: NgForm) {
    this.email = form.value.email;
    const password = form.value.password;
    this.AuthService.signInWithEmailAndPassword(this.email, password).then(userInfo => {
      console.log(userInfo);
    }).catch((error: any) => {
      // Handle Errors here.
      if (error) {
        console.log(error);
      }
    });
  }

  logoutUser() {
    this.AuthService.logOut();
  }
  redirect() {
    setTimeout(() => {
      this.router.navigateByUrl('/register');
    }, 2000);
  }

  public showSuccess() {
    this.toastr.success('Successful login')
    .then((toast: Toast) => {
        setTimeout(() => {
            this.toastr.dismissToast(toast);
        }, 1000);
    });
}

  // loginUser(user) {
   /* return this.authService.loginUser(user)
      .subscribe(
      (data) => {
        localStorage.setItem('auth-key', data);
        this.router.navigate(['/home']);
      },
      error => console.log(error)
      );*/
  }

// }
