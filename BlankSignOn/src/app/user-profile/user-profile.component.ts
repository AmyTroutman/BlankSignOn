import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  newUser = {
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    food: '',
    movie: '',
    artist: '',
    hobbies: []
  };

  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }

}
