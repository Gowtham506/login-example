import { Component, OnInit, Input } from '@angular/core';
import { User } from "app/User/user";
import { UserService } from "app/user.service";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { PopupService } from "app/popup.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userInfo: User, private service: UserService, private router: Router,
               private popupservice : PopupService) {
  }

  ngOnInit() {
    this.userInfo = new User();
      this.userInfo.username='';
      this.userInfo.password='';
  }

  login() {
    this.service.verifyLogin(this.userInfo).subscribe(s => {
      console.log('login valid=' + s)
      if (s === true) {
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.router.navigate(['home']);
      }else{
           this.popupservice.error('Username or Password is incorrect');
      }

    },
  
    );

    //alert("login called"+this.userInfo.username);
  }
  logout(){
    alert('logout called in login');
  }

}
