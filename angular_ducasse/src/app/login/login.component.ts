import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from '../interfaces/user-interface';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm: FormGroup;
  // isSubmitted  =  false;

  // constructor(private authService: AuthService, private userService: UserService,
  //   private router: Router, private formBuilder: FormBuilder ) { }
  //   ngOnInit() {
  //     this.loginForm  =  this.formBuilder.group({
  //         email: ['', Validators.required],
  //         password: ['', Validators.required]
  //     });
  // }

  // get formControls() { return this.loginForm.controls; }

  // seConnecter(){
  //   const form = this.loginForm.getRawValue();
  //   const user = {
  //     email : form.email,
  //     password : form.password
  //   }
  //   this.authService.seConnecter(user)
  //   .subscribe(user => console.log(user));
  // }
}
