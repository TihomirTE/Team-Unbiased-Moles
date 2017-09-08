import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    
  }
  getData(startDestination, endDestination,date)
  {
   
    this.items = this.db.list('flights',{
            query: {
                orderByChild: 'startDestination',
                equalTo: startDestination,
                
              }
        });
    var array: FirebaseListObservable<any[]>;
    
   
    
    return this.items;
  }
}
