import { Component, OnInit, ViewChild } from '@angular/core';
import { profile } from 'console';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  model: UserProfile = new UserProfile();
  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!');
    }
  }

}
