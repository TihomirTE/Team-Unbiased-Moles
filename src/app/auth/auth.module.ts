import { AuthService } from './auth.service';
// import { AuthGuard } from './../services/auth/auth-guard.service';
// import { AuthService } from './../services/auth/auth.service';
// import { UsersService } from './../services/users/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
     LoginComponent
    ],
  providers: [AngularFireAuth, AuthService],
  exports: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
