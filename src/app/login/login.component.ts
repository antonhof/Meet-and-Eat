import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { User } from '../_models/user';
import { FirebaseAuthenticationService } from '../_services/firebase-authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: User;

  title = "Meat and Eat";
  loginData : any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private authenticationService: FirebaseAuthenticationService,
    private alertService: AlertService 
    )  { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.user = this.authenticationService.login(this.f.username.value, this.f.password.value);
    if (this.user == undefined) {
      this.alertService.error('Login fehlgeschlagen.');
      this.loading = false;
    }
    else {
      this.router.navigate(['/home']);
    }

  }

  saveLoginData(value: any) {
    this.loginData = value;
  }

}
