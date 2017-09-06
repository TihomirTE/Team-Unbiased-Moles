import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  from: string;  to: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = 'Home';
  }

  onClick() {
    this.name = 'Telerik Air';
  }
  addDeparture(airport) {
    console.log(airport);

    this.from = 'Departure airport: ' + airport;
    return false;
  }

  addArrival(airport) {
    console.log(airport);
    this.to = 'Arrival airport: ' + airport;
    return false;
  }

}
