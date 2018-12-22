import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { FirebaseUserService } from '../_services/firebase-user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Workspace } from '../_models/workspace';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { FirebaseWorkspaceService } from '../_services/firebase-workspace.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users$: Observable<User[]>;
  workspaces$: Observable<Workspace[]>;
  wForm: FormGroup;
  submitted = false;

  constructor(private userService: FirebaseUserService,
              private workspaceService: FirebaseWorkspaceService,
              private router: Router,
              private formBuilder: FormBuilder,
              private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.currentUser == null) {
      this.router.navigate(['/login']);
    }
    this.wForm = this.formBuilder.group({
      spaceName: ['', Validators.required]
    });
    this.loadAllUser();
    this.loadAllWorkspaces();
  }

  get f() { return this.wForm.controls; }

  createWorkspace() {
    this.submitted = true;
    if (this.wForm.invalid) {
      return;
    }
    this.workspaceService.create(this.f.spaceName.value);
  }

  deleteUser(key: string) {
    this.userService.delete(key);
  }

  private loadAllUser() {
    this.users$ = this.userService.getAll();
  }

  private loadAllWorkspaces() {
    console.log('workspace werden geladen');
    this.workspaces$ = this.workspaceService.getAll();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
