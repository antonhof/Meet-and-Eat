import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { JwtInterceptor } from './_helpers/jwt.interceptor';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { AlertComponent } from './_directives/alert/alert.component';

import { AlertService } from './_services/alert.service';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthGuard } from './_guards/auth.guard';
import { environment } from '../environments/environment';
import { FirebaseUserService } from './_services/firebase-user.service';
import { WorkspaceComponent } from './home/workspace/workspace.component';
import { FirebaseAuthenticationService } from './_services/firebase-authentication.service';
import { FirebaseWorkspaceService } from './_services/firebase-workspace.service';
import { FirebaseRestaurantService } from './_services/firebase-restaurant.service';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErgebnisComponent,
    AlertComponent,
    RegisterComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    FirebaseAuthenticationService,
    AlertService,
    FirebaseUserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    FirebaseUserService,
    FirebaseWorkspaceService,
    FirebaseRestaurantService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
