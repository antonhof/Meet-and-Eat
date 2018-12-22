import { User } from './../_models/user';
import { Injectable, Input } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import { Restaurant } from '../_models/restaurant';
import { map } from 'rxjs/operators';
import { RestWithKey } from '../_models/restWithKey';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRestaurantService {
  key: string;
  restaurantRef: AngularFireList<Restaurant>;
  restaurants$: Observable<Restaurant[]>;
  restaurants: Restaurant[];

  constructor(private db: AngularFireDatabase) {
    console.log('RestaurantService aktiviert.');
  }

  initRestaurants(key: string) {
    this.key = key;
    this.restaurantRef = this.db.list('/workspaces/' + key + '/restaurants');
    this.restaurants$ = this.restaurantRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    );
    this.restaurants$.forEach(restaurants => {
      this.restaurants = restaurants;
    });
    console.log('Restaurants sind initialisiert');
   }

  getAll() {
     return this.restaurants$;
   }

  getRestaurantByName(name: string) {
     return this.restaurants.find(restaurant => {
       return name === restaurant.name;
     });
   }

  create(name: string) {
     let r: Restaurant;
     r = {name: name, score: 0};
     this.restaurantRef.push(r);
   }

  delete(key: string) {
     this.restaurantRef.remove(key);
   }

  updateChecked(rList: RestWithKey[]) {
    rList.forEach(rk => {
      const r: Restaurant = {name: rk.name, score: rk.score};
      this.restaurantRef.update(rk.key, r);
    });
    this.db.list('/workspaces/' + this.key + '/checkedUser')
    .push((JSON.parse(localStorage.getItem('currentUser')) as User).username);
   }

}
