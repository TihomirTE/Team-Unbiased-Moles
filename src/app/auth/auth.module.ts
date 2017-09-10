import { AuthGuard } from './guards/auth.guard';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    RegisterComponent,
     LoginComponent
    ],
  providers: [AngularFireAuth, AuthService, AuthGuard],
  exports: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
