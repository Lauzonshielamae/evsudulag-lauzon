import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserData } from '../mock/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private currentUser: UserModel | null = null;

  login(username: string, password: string) : boolean {
    const user = UserData.find(u => u.username === username && u.password === password);

    if(user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }
  getLoggedInUser(): UserModel | null {
    return this.currentUser;
  }
}
