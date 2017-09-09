import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    
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
