import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  items: Observable<any[]>;
  all: FirebaseListObservable<any[]>;
  current: FirebaseObjectObservable<any>;
   currentPost = {startDestination: "not included", endDestination: "not included", date: "not included", time: "not included", passengers: 0};
  constructor(private db: AngularFireDatabase) {
    
  }
  buy()
  {
    var counter = 0;
    this.all = this.db.list('flights');
    this.all.forEach(element => {
      element.forEach(x=> {
      if((x.startDestination == this.currentPost.startDestination)
      &&(x.endDestination == this.currentPost.endDestination)
      &&(x.date == this.currentPost.date)
      &&(x.time == this.currentPost.time))
      {
        
      this.db.database.ref('flights/' + counter).set({
        clicked: x.clicked,
        startDestination: x.startDestination,
        endDestination: x.endDestination,
        date: x.date,
        time: x.time,
        passengers: x.passengers+1
      });
      }
      counter++;
     
    })
    });
    
  }
  
  getData(startDestination, endDestination,date)
  {
    
   var output = new Observable<any[]>();
    this.items = this.db.list('flights',{
            query: {
                orderByChild: 'startDestination',
                equalTo: startDestination,
              }
        }).map(x=>x.map(y=>
          
          {
            
            if((y.endDestination === endDestination) && (y.date === date)){
            return y;
          }
            else {
              y.endDestination = false;
              return y;
            }
          }))
    
    
    
    return this.items;
  }
}
