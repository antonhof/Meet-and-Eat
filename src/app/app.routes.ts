import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuswahlComponent } from './auswahl/auswahl.component';
import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  
    {path: "", redirectTo: 'auswahl', pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "auswahl", component: AuswahlComponent},
    {path: "ergebnis", component: ErgebnisComponent},
    {path: "register", component: RegisterComponent}
];
