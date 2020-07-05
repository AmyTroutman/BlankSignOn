import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor(private routerService: Router, private AuthSerivce: AuthService) {
    this.RegisterForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    },
    {
      validators: this.passwordValidator
    });
  }

  get usernameInvalid() {
    return !this.RegisterForm.controls.username.valid && this.RegisterForm.controls.username.touched;
  }
  get passwordInvalid() {
    return !this.RegisterForm.controls.password.valid && this.RegisterForm.controls.password.touched;
  }
  get passwordConfirmInvalid() {
    return !this.RegisterForm.controls.passwordConfirm.valid && this.RegisterForm.controls.passwordConfirm.touched;
  }
  get passwordError(): boolean {
    return this.RegisterForm.hasError('passwordError');
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.AuthSerivce.add(this.RegisterForm.controls.username.value, this.RegisterForm.controls.passwordConfirm.value);
    console.log(this.RegisterForm);
    this.routerService.navigate(['/login']);
  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get('password');
    const confirm = control.get('passwordConfirm');

    if (confirm.value !== '' && password.value !== confirm.value) {
      return {passwordError: true};
    }
    return null;
  }


}
