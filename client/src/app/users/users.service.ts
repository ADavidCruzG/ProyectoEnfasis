import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3003/api/users/' + email)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserByEmailToLogin(userToLogin) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3003/api/users/login', userToLogin)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  createUser(userToCreate) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3003/api/users', userToCreate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
