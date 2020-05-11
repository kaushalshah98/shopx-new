import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor() {}

  getRole() {
    return JSON.parse(localStorage.getItem('role'));
  }
  setRole(role) {
    localStorage.setItem('role', JSON.stringify(role));
  }
}
