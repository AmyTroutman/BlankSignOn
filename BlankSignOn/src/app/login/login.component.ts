import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  validLogin = true;
  constructor(private routerService: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.validLogin = this.authService.login(this.LoginForm.controls.username.value, this.LoginForm.controls.password.value);
    if (this.validLogin) {
      this.routerService.navigate(['/userprofile']);
    }
  }

}
