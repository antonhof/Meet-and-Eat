import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { RegisterComponent } from './register/register.component';
import { WorkspaceComponent } from './home/workspace/workspace.component';

export const routes: Routes = [
  
    {path: "", redirectTo: 'home', pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent, data: { animation: 'home'}},
    {path: "home/:key", component: WorkspaceComponent, data: { animation: 'workspace'}},
    {path: "ergebnis", component: ErgebnisComponent},
    {path: "register", component: RegisterComponent}
];
