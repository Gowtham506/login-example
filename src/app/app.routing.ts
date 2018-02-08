import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";
import { Authenticate } from "app/Authenticate/authentic";
import { RegisterComponent } from 'app/register/register.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [Authenticate] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
export const routing = RouterModule.forRoot(appRoutes);