import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import {PvalidatorService} from './pvalidator.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Userdata} from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  disabled=true;
  constructor(private _auth: AuthService,
    private formBuilder: FormBuilder,
    private pvalidator: PvalidatorService,
    private _router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
      password: ['', Validators.compose([Validators.required, this.pvalidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.pvalidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  userItem =new Userdata('','','')
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);      
      
    }
  }
  addUser(){
   
    this.userItem=this.registerForm.value;
     this._auth.registerUser(this.userItem);
    console.log("saved");
    
    this._router.navigate(['/login'])
      }
 
}
