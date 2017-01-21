import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
@Injectable()

export class UserService {
	usersUrl: string = 'https://reqres.in/api/users';
	constructor (private http: Http){
	}
	//grab all users
	getUsers(): Observable<any> {
	 return this.http.get(`${this.usersUrl}`)
		  .map(res => res.json().data)
			.catch(this.handleError);
	}
	//get a single user

	//create a user

	//update a user

	//delete a user
/*
 * Handle Any Errors from API
 */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}
