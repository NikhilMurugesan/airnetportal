import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "emailid": new FormControl(null, [Validators.required, Validators.email]),
      "username": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      "mobileNumber": new FormControl(null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
      "confirmPassword": new FormControl(null, [Validators.required])
    },
    );
  }

  submitData() {
    console.log(this.registerForm.value);
  }

  get email() {
    return this.registerForm.get('emailid');
  }

  get us() {
    return this.registerForm.get('username');
  }

  get num() {
    return this.registerForm.get('mobileNumber');
  }

  get pass() {
    return this.registerForm.get('password');
  }

  get cpass() {
    return this.registerForm.get('confirmPassword')
  }
}
