import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {email:"",password:""};
  constructor(private _authService: AuthService,
    private _router:Router, private userService:UserService ) { }
 public username;
 
  ngOnInit() {
  }
  loginUser(){


console.log(this.loginUserData.email)
console.log(this.loginUserData.password)
// saving username to service
this.username  = this.loginUserData.email.substring(0, this.loginUserData.email.lastIndexOf("@"));
console.log("yes:"+this.username);
this.userService.username=this.username;

// end

if(this.loginUserData.email=="admin@gmail.com" && this.loginUserData.password=="Admin.123"){
  sessionStorage.setItem('token','admin')
  this._router.navigate(['cwelcome'])
}
else{
  this._authService.loginUser(this.loginUserData)
  .subscribe(
    res=>{
      console.log(res.token)
      sessionStorage.setItem('token',res["token"])
      this._router.navigate(['/cwelcome'])

    },
    err =>{ 
      console.log(err);
      alert('Invalid User or password!')
      this._router.navigate(['/login'])
    }
  )
}



  }
}