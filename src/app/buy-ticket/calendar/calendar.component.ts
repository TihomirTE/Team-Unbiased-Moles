import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ConvertToString } from './../../pipes/convert-to-string.pipe';
import { CapitalizeFirstLetter } from './../../pipes/capitalize-first-letter.pipe';

const now = new Date();

@Component({
  selector: 'app-datepicker',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ConvertToString, CapitalizeFirstLetter]
})
export class CalendarComponent implements OnInit {
  startDestination: string;
  endDestination: string;
  posts: Observable<any[]>;
  arr = [];
  constructor(private datasrvs: DataService, private convertToString: ConvertToString,
              private capitalizeFL: CapitalizeFirstLetter) {

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
    const convertedStartDestination = this.capitalizeFL.transform(this.startDestination);
    const convertedEndDestination = this.capitalizeFL.transform(this.endDestination);
    const transformDate = this.convertToString.transform(this.date);

    this.posts = this.datasrvs.getData(convertedStartDestination, convertedEndDestination, transformDate);

      // console.log(this.date);
    // console.log(this.startDestination);
    // console.log(this.endDestination);
    // for (var i in this.posts) {
    //       console.log(transformDate);
    //       console.log(this.posts[i].endDestination);
    // }
  }

  getUrlImg() {
    return 'url(./../../../../assets/img/ticket.jpg)';
  }
}
