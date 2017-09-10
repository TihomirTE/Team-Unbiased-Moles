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
        
        
        if(counter <= 41)
        {
      if((x.startDestination === this.currentPost.startDestination)
      &&(x.endDestination === this.currentPost.endDestination)
      &&(x.date === this.currentPost.date)
      &&(x.time === this.currentPost.time))
      {
        x.passengers = x.passengers + 1;
        console.log(x.passengers);
        console.log(x.endDestination);
        
        console.log(counter);
     
        this.db.object('flights/' + counter).update({
            passengers: x.passengers
        })
       
      }
        }
      counter++;
     
    })
    });
    // for (var i in this.all) {
    //       this.all.forEach(element => {
    //         console.log(element[i].endDestination);
    //       })
        
    //   if((this.all[i].startDestination === this.currentPost.startDestination)
    //   &&(this.all[i].endDestination === this.currentPost.endDestination)
    //   &&(this.all[i].date === this.currentPost.date)
    //   &&(this.all[i].time === this.currentPost.time))
    //   {
    //     console.log(this.all[i].passengers+1);
    //     console.log(this.all[i].endDestination);
        
    //     console.log(counter);
     
    //     // this.db.object('flights/' + counter).update({
    //     //     passengers: x.passengers + 1
    //     // })
       
    //   }
    //   counter++;
    //     }
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
