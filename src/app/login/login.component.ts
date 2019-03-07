import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: Object = {};
  loginform: FormGroup;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.loginform = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
  }

  login(loginUser) {
    console.log('User is ' + JSON.stringify(loginUser));
  }
}
