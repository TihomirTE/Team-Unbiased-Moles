import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

const now = new Date();

@Component({
  selector: 'app-datepicker',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  startDestination: string;
  endDestination: string;
  posts : FirebaseListObservable<any[]>;

  constructor(private datasrvs: DataService) { 
    
  }
  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  navigateTo() {
    
  }

  ngOnInit() {
   
    
  }

  loger()
  {
     this.posts = this.datasrvs.getData(this.startDestination,this.endDestination,this.date);
    console.log(this.startDestination);
    console.log(this.endDestination);
    console.log(this.date);
  }
}
