import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiSettings } from "src/app/api.settings";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(user) {
    return this.http.post(ApiSettings.signUp, user)
      .pipe(map(res => res), catchError(e => this.errorHandler(e)))
  }

  login(user) {
    return this.http.post(ApiSettings.login, user)
      .pipe(map(res => res), catchError(e => this.errorHandler(e)))
  }

  addEmployee(user) {
    return this.http.post(ApiSettings.addEmployee, user)
      .pipe(map(res => res), catchError(e => this.errorHandler(e)))
  }

  deleteEmployee(user) {
    return this.http.post(ApiSettings.deleteEmployee, user)
      .pipe(map(res => res), catchError(e => this.errorHandler(e)))
  }

  updateEmployee(user) {
    return this.http.post(ApiSettings.updateEmployee, user)
      .pipe(map(res => res), catchError(e => this.errorHandler(e)))
  }

  errorHandler(e) {
    throw Error(e);
  }
}

// npm install --save @angular/material @angular/cdk @angular/animations
