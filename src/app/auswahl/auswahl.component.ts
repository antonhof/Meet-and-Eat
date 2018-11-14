import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-auswahl',
  templateUrl: './auswahl.component.html',
  styleUrls: ['./auswahl.component.css']
})
export class AuswahlComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUser();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUser()
    });
  }

  private loadAllUser() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
