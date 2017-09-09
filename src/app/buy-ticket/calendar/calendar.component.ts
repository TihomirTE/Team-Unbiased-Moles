import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ConvertToString } from './../../pipes/convert-to-string.pipe';

const now = new Date();

@Component({
  selector: 'app-datepicker',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ConvertToString]
})
export class CalendarComponent implements OnInit {
  startDestination: string;
  endDestination: string;
  posts: Observable<any[]>;
  arr = [];
  constructor(private datasrvs: DataService, private convertToString: ConvertToString) {

  }
  model: NgbDateStruct;
  date: {year: number, month: number, day: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  navigateTo() {

  }

  ngOnInit() {

  }

  Click() {
    this.posts = this.datasrvs.getData(this.startDestination, this.endDestination, this.date);
    //  for (var i in this.posts) {
      //      this.arr.push(this.posts[i]);
      //  }
    const transformDate = this.convertToString.transform(this.date);
    // console.log(this.startDestination);
    // console.log(this.endDestination);
    console.log(transformDate);

  }
}
