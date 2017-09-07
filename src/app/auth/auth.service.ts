import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private currentUser: firebase.User = null;
  constructor(private AngularFireAuthent: AngularFireAuth, private Router: Router) { }

  createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFireAuthent.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      return user;
    });
  }

  signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFireAuthent.auth.signInWithEmailAndPassword(email, password).then((userInfo) => {
      this.Router.navigate(['/']);
      return userInfo;
    });
  }

  // currentUser() {
  //   return this.AngularFireAuthent.auth.currentUser;
  // }

  // get currentUserObservable(): Observable<firebase.User> {
  //   return this.AngularFireAuthent.authState;
  // }

  logOut() {
    this.AngularFireAuthent.auth.signOut();
    this.Router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    if (this.currentUser == null) {
      return false;
    }
    return true;
  }


}
