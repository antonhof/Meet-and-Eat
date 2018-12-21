import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUserService {
  usersRef: AngularFireList<User>;
  users$: Observable<User[]>;
  users: User[];

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
    this.users$ = this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    );
    this.users$.forEach(users => {
      this.users = users;
    }); 
   }

  getAll() {
    return this.users$;
  }

getByUserName(userName: string) {
  return this.users.find(function(user) {
    return userName == user.username;
  });
}

register(user: User) {
  this.usersRef.push(user);
  return this.users$;
}

/*update(user_id: number, user: User) {
  this.db.object('/users/' + user_id).update(user);
  return this.db.object('/users/' + user_id).snapshotChanges();
} */

delete(key: string) {
  this.usersRef.remove(key);
}


}
