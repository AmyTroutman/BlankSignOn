import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor(private routerService: Router) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.RegisterForm);
    this.routerService.navigate(['/login']);
  }

}
