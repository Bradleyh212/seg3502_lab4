import { Injectable } from '@angular/core';

export interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserData {
  user: UserInfo | null = null;
}