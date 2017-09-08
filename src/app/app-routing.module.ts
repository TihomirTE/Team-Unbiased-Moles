import { AuthGuard } from './auth/guards/auth.guard';
// import { AdminGuard } from './services/auth/admin-guard.service';
// import { AuthGuard } from './services/auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './buy-ticket/calendar/calendar.component';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // buyTicket page is protected by auth guard
    { path: 'buyTicket', component: CalendarComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
