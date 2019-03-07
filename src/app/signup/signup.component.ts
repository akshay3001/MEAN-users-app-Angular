import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Object = {};
  emailFormControl ;
  constructor() { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  register(user) {
    console.log('user details object', user);
  }
}
