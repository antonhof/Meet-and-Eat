import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router,
              private db: AngularFireDatabase,
              private af: AngularFireAuth) {
                af.authState.subscribe((auth) => {
                // this. = auth;
                });
               }

  
  
}
