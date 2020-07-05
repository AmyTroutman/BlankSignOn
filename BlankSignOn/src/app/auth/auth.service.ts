import { Injectable } from '@angular/core';
import { AuthModule } from './auth.module';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: AuthModule
})
export class AuthService {

  users: any[] = [];

  constructor() { }

  get getToken(): string {
    return sessionStorage.getItem('token');
  }
  get loggedIn(): boolean {
    return this.getToken !== null ? true : false;
  }

  add(username: string, password: string) {
    this.users.push({username, password});
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username);
    if (user !== undefined && user.password === password) {
      sessionStorage.setItem('token', `${username}${password}`);
      return true;
    }
    return false;
  }


}
