import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user: Object = {};
  signupform: FormGroup;
  textPattern = '^[a-zA-Z ]{4,}';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.pattern(this.textPattern)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'confirm': [''],
    }, {validator: this.passwordMatch});
  }

  passwordMatch(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirm').value; // to get value in input tag
     if (password !== confirmPassword) {
         console.log('false');
         AC.get('confirm').setErrors({passMatch: true});
     } else {
         console.log('true');
         return null;
     }
}

  register(user) {
    console.log('user details object', user);
  }
}

