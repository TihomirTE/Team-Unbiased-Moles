import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-fligth',
  templateUrl: './fligth.component.html',
  styleUrls: ['./fligth.component.css'],
  
})


export class FligthComponent implements OnInit {
email: string;
post: {};
constructor(private AuthService: AuthService, private Router: Router, private DataService: DataService) { }

ngOnInit() {
  this.post = {startDestination: this.DataService.currentPost.startDestination,
        endDestination: this.DataService.currentPost.endDestination,
        date: this.DataService.currentPost.date,
        time: this.DataService.currentPost.time,
        passengers: this.DataService.currentPost.passengers
      }
}

click()
{
  this.DataService.buy();
}

  
}
