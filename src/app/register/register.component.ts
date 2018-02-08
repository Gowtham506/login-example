import { Component, OnInit } from '@angular/core';
import { User } from "app/User/user";
import { UserService } from "app/user.service";
import { Router } from "@angular/router";
import { PopupService } from "app/popup.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private user : User,private service: UserService, private router: Router,
              private popupservice:PopupService) { }

  ngOnInit() {
  }

  register(){
     this.service.registerUser(this.user).subscribe(res => {
        if(res === true){
         this.popupservice.success('Registered successfully.',true);
         this.router.navigateByUrl('login');
          console.log('localstorage'+localStorage.getItem('userInfo'));
        }
     });
  }

}
