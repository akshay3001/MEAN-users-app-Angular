import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameControl;
  passwordControl;

  
  constructor() { }

  ngOnInit() {
    this.usernameControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
    ]);
  }

  

    login(username, password: string) {
      alert('Username is ' + username + ' Password is ' + password);
    }
  }
