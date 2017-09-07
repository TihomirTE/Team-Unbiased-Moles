import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UsersModule } from './users/users.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './buy-ticket/calendar/calendar.component';
import { AboutComponent } from './about/about.component';
import { BuyTicketModule } from './buy-ticket/buy-ticket.module';
import { FirebaseModule } from './firebase/firebase.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    AppRoutingModule,
    SharedModule,
    NgbModule.forRoot(),
    FormsModule,
    BuyTicketModule,
    FirebaseModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
