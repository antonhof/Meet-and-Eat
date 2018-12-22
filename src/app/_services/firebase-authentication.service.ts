import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseUserService } from './firebase-user.service';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {

  user: User;

  constructor(private db: AngularFireDatabase, private userService: FirebaseUserService) { }

  login(username: string, password: string) {

    this.user = this.userService.getByUserName(username);
    if (this.user !== undefined) {
      if (this.user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        return this.user;
      } else {
        /*Passwort ist falsch*/
      }
    } else {
      /*Benutzer nicht vorhanden*/
    }
    return undefined;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
