import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
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
    const { username, password} = this.Form.value;
    if(this.userService.login(username, password))
    {
      this.router.navigate(['/project/detail'])
    }
    else {
      console.log('error');
    }
  }
}
