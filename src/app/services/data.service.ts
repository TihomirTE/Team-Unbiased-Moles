import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  items: Observable<any[]>;
  all: FirebaseListObservable<any[]>;
  current: FirebaseObjectObservable<any>;
   currentPost = {startDestination: "not included", endDestination: "not included", date: "not included", time: "not included"};
  constructor(private db: AngularFireDatabase) {
    
  }
  uncheck()
  {
    var counter = 0;
    this.all = this.db.list('flights');
    this.all.forEach(element => {
      element.forEach(x=> {
      
      this.db.database.ref('flights/' + counter).set({
        clicked: false,
        startDestination: x.startDestination,
        endDestination: x.endDestination,
        date: x.date,
        time: x.time
      });
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
