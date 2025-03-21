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

  userError = '';
  onSubmit(){

    this.userService.userLogin(this.Form.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/project/dashboard']);
          this.userError = '';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.userError = 'Invalid username or password.';
        } else {
          this.userError = 'Something went wrong. Please try again.';
        }
      }
    });

    // const { username, password} = this.Form.value;
    // if(this.userService.login(username, password))
    // {
    //   this.router.navigate(['/project/detail'])
    // }
    // else {
    //   console.log('error');
    // }
  }
}
