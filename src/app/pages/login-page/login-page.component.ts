import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // userModel = new User();
  // loginForm = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl()
  // });

  loginResponse = ''
  loginClass = ''

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { 
    let flag = sessionStorage.getItem('flag');
    if(flag=='1'){
      this.loginResponse = 'Successfully Logged out'
      this.loginClass = 'alert-success'
      sessionStorage.clear();
    }
  }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  Login(){
    this.auth.login(this.loginForm.value).subscribe(
      (response:any) =>{
        this.loginResponse = 'Successfully Logged in'
        this.loginClass = 'alert-success'
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        this.router.navigateByUrl('home')
      },(error) => {
        // console.log(error);
        this.loginResponse = `Login failed, ${error.error.message}, Try again`
        this.loginClass = 'alert-danger'
      }
    ); 
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
