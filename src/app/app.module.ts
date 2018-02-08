import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { User } from "app/User/user";
import { UserService } from "app/user.service";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { Authenticate } from './Authenticate/authentic';
import { RegisterComponent } from './register/register.component';
import { PopupService } from "app/popup.service";
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [User, UserService, Authenticate,PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
