import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Form: FormGroup;

  constructor(private fb: FormBuilder){
    this.Form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get username(){
    return this.Form.get('username');
  }
  get password(){
    return this.Form.get('password');
  }

  onSubmit(){
    if(this.Form.valid){
      console.log('Login Successfull');
    }
  }
}
